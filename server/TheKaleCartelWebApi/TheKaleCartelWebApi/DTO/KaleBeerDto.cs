using System;
using System.ComponentModel.DataAnnotations;
using TheKaleCartelWebApi.Models;

namespace TheKaleCartelWebApi.DTO
{
    public class KaleBeerDto
    {
        public int KaleBeerId { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Description { get; set; }

        public string PictureUrl { get; set; }

        [Required]
        public int VolProcentage { get; set; }

        [Required]
        public int Rating { get; set; }

        public DateTime CreationDate { get; set; }

        public int KaleProfileId { get; set; }
        public KaleProfile KaleProfile { get; set; }
    }
}