using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TheKaleCartelWebApi.Models;
using TheKaleCartelWebApi.Repositories.Repository;

namespace TheKaleCartelWebApi.Repositories.KaleProfileRepository
{
    public interface IKaleProfileRepository : IRepository<KaleProfile>
    {
        // implement ekstra funktionality specific for KaleProfile
    }
}
