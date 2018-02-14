using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using TheKaleCartelWebApi.Models;

namespace TheKaleCartelWebApi.DTO.Events
{
  public class EventPostDTO
  {
    public int KaleEventId { get; set; }
    [Required]
    public string KaleProfileName { get; set; }
    [Required]
    public int KaleProfileId { get; set; }

    [Required]
    public DateTime EventDate { get; set; }

    [Required]
    public string Name { get; set; }
    [Required]
    public IEnumerable<KaleBeerGetEventDTO> KaleBeers { get; set; }
    [Required]
    public IEnumerable<KaleRecipeGetEventDTO> KaleRecipes { get; set; }
  }
}
