using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TheKaleCartelWebApi.DTO.Recipies
{
    public class KaleRecipeDetailsDto
    {
      public int KaleRecipeId { get; set; }

      [Required]
      public string Name { get; set; }

      [Required]
      public int Rating { get; set; }

      [Required]
      public string CoursOfAction { get; set; }

      public DateTime CreationDate { get; set; }

      [Required]
      public int KaleProfileId { get; set; }
  }
}
