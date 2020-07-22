using System.Collections.Generic;

namespace urban_farms.Models
{
  public class CreateRecipeDto
  {

    public string Title { get; set; }
    public string Description { get; set; }
    public bool Saved { get; set; }
    public List<string> RecipeSteps { get; set; }
  }
}