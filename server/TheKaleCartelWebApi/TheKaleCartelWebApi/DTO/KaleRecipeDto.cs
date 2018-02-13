using System;
using System.ComponentModel.DataAnnotations;
using TheKaleCartelWebApi.Models;

namespace TheKaleCartelWebApi.DTO
{
    public class KaleRecipeDto
    {
        public int KaleRecipeId { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public int Rating { get; set; }

        [Required]
        public string CoursOfAction { get; set; }

        public DateTime CreationDate { get; set; }

        public int KaleProfileId { get; set; }
        public KaleProfile KaleProfile { get; set; }
    }
}