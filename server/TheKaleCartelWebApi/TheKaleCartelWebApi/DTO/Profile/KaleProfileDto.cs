using System.ComponentModel.DataAnnotations;

namespace TheKaleCartelWebApi.DTO.Profile
{
    public class KaleProfileDto
    {
        public int KaleProfileId { get; set; }

        [Required]
        [StringLength(100)]
        public string Name { get; set; }

        [Required]
        public int TotalKaleLevel { get; set; }

        [Required]
        public string PictureUrl { get; set; }

        [Required]
        public string Nickname { get; set; }
    }
}
