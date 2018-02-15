using TheKaleCartelWebApi.Data;
using TheKaleCartelWebApi.Models;
using TheKaleCartelWebApi.Repositories.Repository;

namespace TheKaleCartelWebApi.Repositories.KaleEventRepository
{
  public class KaleEventRepository: Repository<KaleEvent>, IKaleEventRepository
  {
    public KaleEventRepository(KaleDbContext context) : base(context)
    {
    }
  }
}
