using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TheKaleCartelWebApi.Models;
using TheKaleCartelWebApi.Repositories.Repository;

namespace TheKaleCartelWebApi.Repositories.KaleBeerRepository
{
    public interface IKaleBeerRepository : IRepository<KaleBeer>
    {
        // Ekstra funktionalitet specifikt for Kale Beer
    }
}
