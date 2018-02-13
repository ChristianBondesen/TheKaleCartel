using System;

namespace TheKaleCartelWebApi.Models
{
    public class KaleRecipe
    {
        public int KaleRecipeId { get; set; }
        public string Name { get; set; }
        public int Rating { get; set; }
        public string CoursOfAction { get; set; }
        public DateTime CreationDate { get; set; }

        public int KaleProfileId { get; set; }
        public KaleProfile KaleProfile { get; set; }
    }
}