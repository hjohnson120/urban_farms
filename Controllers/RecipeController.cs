using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using urban_farms.Models;

namespace urban_farms.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class RecipeController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public RecipeController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/Recipe
    [HttpGet]
    public async Task<ActionResult<List<Recipe>>> GetRecipes()
    {
      return await _context
        .Recipes
        .Include(x => x.RecipeSteps)
        .ToListAsync();
    }

    // GET: api/Recipe/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Recipe>> GetRecipe(int id)
    {
      var recipe = await _context.Recipes.FindAsync(id);

      if (recipe == null)
      {
        return NotFound();
      }

      return recipe;
    }

    // PUT: api/Recipe/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("{id}")]
    public async Task<IActionResult> PutRecipe(int id, Recipe recipe)
    {
      if (id != recipe.Id)
      {
        return BadRequest();
      }

      _context.Entry(recipe).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!RecipeExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    // POST: api/Recipe
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost]
    public async Task<ActionResult<Recipe>> PostRecipe(CreateRecipeDto createRecipeData)
    {
      var recipe = new Recipe(createRecipeData);

      _context.Recipes.Add(recipe);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetRecipe", new { id = recipe.Id }, recipe);
    }

    // DELETE: api/Recipe/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<Recipe>> DeleteRecipe(int id)
    {
      var recipe = await _context.Recipes.FindAsync(id);
      if (recipe == null)
      {
        return NotFound();
      }

      _context.Recipes.Remove(recipe);
      await _context.SaveChangesAsync();

      return recipe;
    }

    private bool RecipeExists(int id)
    {
      return _context.Recipes.Any(e => e.Id == id);
    }
  }
}
