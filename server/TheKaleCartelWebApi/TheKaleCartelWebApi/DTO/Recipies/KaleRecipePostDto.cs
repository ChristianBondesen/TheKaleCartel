using System.ComponentModel.DataAnnotations;

namespace TheKaleCartelWebApi.DTO.Recipies
{
  public class KaleRecipePostDto
  {
    [Required]
    public string Name { get; set; }
    [Required]
    public int KaleProfileId { get; set; }
    [Required]
    public string CoursOfAction { get; set; }
  }
}
