using System;

namespace TheKaleCartelWebApi.Models
{
    public class KaleBeer
    {
        public int KaleBeerId { get; set; }
        public string Name { get; set; }
        public int Rating { get; set; }
        public string PictureUrl { get; set; }
        public int VolPercentage { get; set; }
        public DateTime CreationDate { get; set; }
        public string Description { get; set; }
        
        public int KaleProfileId { get; set; }
        public KaleProfile KaleProfile { get; set; }
    }
}
