using System.ComponentModel.DataAnnotations;

namespace TheKaleCartelWebApi.DTO.Beer
{
  public class KaleBeerPostDto
  {
    [Required]
    public string Name { get; set; }
    [Required]
    public int KaleProfileId { get; set; }
    [Required]
    public string Description { get; set; }
    [Required]
    public int VolPercentage { get; set; }
  }
}
