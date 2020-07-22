using System.Collections.Generic;

namespace urban_farms.Models
{
  public class Recipe
  {
    public Recipe() { }
    public Recipe(CreateRecipeDto createRecipeDto)
    {
      Title = createRecipeDto.Title;
      Description = createRecipeDto.Description;
      Saved = createRecipeDto.Saved;
      createRecipeDto.RecipeSteps?.ForEach(step =>
      {
        var recipeStep = new RecipeStep(step);
        RecipeSteps.Add(recipeStep);
      });
    }
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public bool Saved { get; set; }
    public List<RecipeStep> RecipeSteps { get; set; }
  }
}