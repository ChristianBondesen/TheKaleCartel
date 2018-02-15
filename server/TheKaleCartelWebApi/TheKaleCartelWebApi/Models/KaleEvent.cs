using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TheKaleCartelWebApi.Models
{
  public class KaleEvent
  {
    public int KaleEventId { get; set; }
    public int KaleProfileId { get; set; }
    public KaleProfile KaleProfile { get; set; }
    public DateTime EventDate { get; set; }
    public string Name { get; set; }
    public IEnumerable<KaleBeer> KaleBeers { get; set; } = new HashSet<KaleBeer>();
    public IEnumerable<KaleRecipe> KaleRecipes { get; set; } = new HashSet<KaleRecipe>();
  }
}
