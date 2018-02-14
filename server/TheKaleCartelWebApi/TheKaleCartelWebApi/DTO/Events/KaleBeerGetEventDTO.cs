namespace TheKaleCartelWebApi.DTO.Events
{
  public class KaleBeerGetEventDTO
  {
    public string Name { get; set; }
    public int KaleProfileId { get; set; }
    public string Description { get; set; }
    public int VolPercentage { get; set; }
  }
}