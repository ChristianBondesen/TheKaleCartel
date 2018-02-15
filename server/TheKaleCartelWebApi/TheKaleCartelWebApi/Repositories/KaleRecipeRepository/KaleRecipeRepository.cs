using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TheKaleCartelWebApi.Data;
using TheKaleCartelWebApi.Models;
using TheKaleCartelWebApi.Repositories.Repository;

namespace TheKaleCartelWebApi.Repositories.KaleRecipeRepository
{
    public class KaleRecipeRepository : Repository<KaleRecipe>, IKaleRecipeRepository
    {
      public KaleRecipeRepository(KaleDbContext context) : base(context) { }
      
    }
}
