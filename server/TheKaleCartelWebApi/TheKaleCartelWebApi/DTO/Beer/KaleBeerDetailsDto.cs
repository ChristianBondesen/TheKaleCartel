using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TheKaleCartelWebApi.DTO.Beer
{
    public class KaleBeerDetailsDto
    {

    public int KaleBeerId { get; set; }

      [Required]
      public string Name { get; set; }

      [Required]
      public string Description { get; set; }

      public string PictureUrl { get; set; }

      [Required]
      public int Rating { get; set; }

      [Required]
      public int VolPercentage { get; set; }
      public DateTime CreationDate { get; set; }
      public int KaleProfileId { get; set; }
  }
}
