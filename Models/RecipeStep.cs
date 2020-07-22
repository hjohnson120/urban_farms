namespace urban_farms.Models
{
  public class RecipeStep
  {
    public RecipeStep(string step)
    {
      Step = step;
    }
    public int Id { get; set; }
    public string Step { get; set; }
    public int? RecipeId { get; set; }
    public Recipe Recipe { get; set; }
  }
}