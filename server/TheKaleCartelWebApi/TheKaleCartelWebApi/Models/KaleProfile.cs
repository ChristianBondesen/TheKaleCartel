using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TheKaleCartelWebApi.Models
{
    public class KaleProfile
    {
        public int KaleProfileId { get; set; }
        public string Name { get; set; }
        public string Nickname { get; set; }
        public int TotalKaleLevel { get; set; }
        public string PictureUrl { get; set; }
        public string Description { get; set; }

        public ICollection<KaleRecipe> KaleRecipes { get; set; } = new HashSet<KaleRecipe>();
        public ICollection<KaleBeer> KaleBeers { get; set; } = new HashSet<KaleBeer>();
    }
}
