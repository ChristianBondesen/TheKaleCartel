using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using TheKaleCartelWebApi.DTO.Beer;
using TheKaleCartelWebApi.DTO.Recipies;

namespace TheKaleCartelWebApi.DTO.Profile
{
    public class KaleProfileDetailsDto
    {
        public int KaleProfileId { get; set; }

        [Required]
        [StringLength(100)]
        public string Name { get; set; }

        [Required]
        public int TotalKaleLevel { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public string PictureUrl { get; set; }

        public ICollection<KaleBeerDto> KaleBeers { get; set; }
        public ICollection<KaleRecipeDto> KaleRecipies { get; set; }
    }
}
