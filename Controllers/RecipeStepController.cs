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
  public class RecipeStepController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public RecipeStepController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/RecipeStep
    [HttpGet]
    public async Task<ActionResult<IEnumerable<RecipeStep>>> GetRecipeSteps()
    {
      var currentRecipe = _context.Recipes.FirstOrDefault(f => f.Id == f.Id);

      return await _context.RecipeSteps.Where(w => w.RecipeId == currentRecipe.Id).ToListAsync();
      // return await _context.RecipeSteps.ToListAsync();
    }

    // GET: api/RecipeStep/5
    [HttpGet("{id}")]
    public async Task<ActionResult<RecipeStep>> GetRecipeStep(int id)
    {
      var recipeStep = await _context.RecipeSteps.FindAsync(id);

      if (recipeStep == null)
      {
        return NotFound();
      }

      return recipeStep;
    }

    // PUT: api/RecipeStep/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("{id}")]
    public async Task<IActionResult> PutRecipeStep(int id, RecipeStep recipeStep)
    {
      if (id != recipeStep.Id)
      {
        return BadRequest();
      }

      _context.Entry(recipeStep).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!RecipeStepExists(id))
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

    // POST: api/RecipeStep
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost]
    public async Task<ActionResult<RecipeStep>> PostRecipeStep(RecipeStep recipeStep)
    {
      _context.RecipeSteps.Add(recipeStep);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetRecipeStep", new { id = recipeStep.Id }, recipeStep);
    }

    // DELETE: api/RecipeStep/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<RecipeStep>> DeleteRecipeStep(int id)
    {
      var recipeStep = await _context.RecipeSteps.FindAsync(id);
      if (recipeStep == null)
      {
        return NotFound();
      }

      _context.RecipeSteps.Remove(recipeStep);
      await _context.SaveChangesAsync();

      return recipeStep;
    }

    private bool RecipeStepExists(int id)
    {
      return _context.RecipeSteps.Any(e => e.Id == id);
    }
  }
}
