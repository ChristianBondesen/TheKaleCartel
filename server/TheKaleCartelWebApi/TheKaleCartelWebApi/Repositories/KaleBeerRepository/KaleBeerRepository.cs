using TheKaleCartelWebApi.Data;
using TheKaleCartelWebApi.Models;
using TheKaleCartelWebApi.Repositories.Repository;

namespace TheKaleCartelWebApi.Repositories.KaleBeerRepository
{
    public class KaleBeerRepository : Repository<KaleBeer>, IKaleBeerRepository
    {
        public KaleBeerRepository(KaleDbContext context) : base(context) { }      
    }
}