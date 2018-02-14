using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TheKaleCartelWebApi.Data;
using TheKaleCartelWebApi.Models;
using TheKaleCartelWebApi.Repositories.Repository;

namespace TheKaleCartelWebApi.Repositories.KaleProfileRepository
{
    public class KaleProfileRepository : Repository<KaleProfile>, IKaleProfileRepository 
    {
        public KaleProfileRepository(KaleDbContext context) : base(context) { }

        public override KaleProfile Get(Expression<Func<KaleProfile, bool>> match)
        {
            return _context.KaleProfiles.Include(i => i.KaleBeers).Single(match);
        }
    }
}
