using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TheKaleCartelWebApi.Models;

namespace TheKaleCartelWebApi.DTO.Events
{
    public class GetEventDTO
    {
      public string KaleProfileName { get; set; }
      public int KaleEventId { get; set; }
      public int KaleProfileId { get; set; }
      public DateTime EventDate { get; set; }
      public string Name { get; set; }
      public IEnumerable<KaleBeer> KaleBeers { get; set; } 
      public IEnumerable<KaleRecipe> KaleRecipes { get; set; }

  }
}
