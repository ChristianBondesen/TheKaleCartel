using System;

namespace TheKaleCartelWebApi.Models
{
    public class KaleRecipe
    {
        public int KaleRecipeId { get; set; }
        public string Name { get; set; }
        public int Rating { get; set; }
        public string CourseOfAction { get; set; }
        public DateTime CreationDate { get; set; }
        public string PictureUrl { get; set; }
        public int KaleProfileId { get; set; }
    }
}
