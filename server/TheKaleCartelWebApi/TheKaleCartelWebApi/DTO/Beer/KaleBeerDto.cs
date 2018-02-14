using System;
using System.ComponentModel.DataAnnotations;

namespace TheKaleCartelWebApi.DTO.Beer
{
    public class KaleBeerDto
    {
        public int KaleBeerId { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public int Rating { get; set; }

    }
}
