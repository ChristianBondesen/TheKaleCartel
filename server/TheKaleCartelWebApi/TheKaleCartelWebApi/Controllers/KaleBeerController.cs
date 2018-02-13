using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TheKaleCartelWebApi.Controllers.Parameters;
using TheKaleCartelWebApi.DTO;
using TheKaleCartelWebApi.Models;
using TheKaleCartelWebApi.Repositories.KaleBeerRepository;

namespace TheKaleCartelWebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[Controller]")]
    public class KaleBeerController : Controller
    {
        private readonly IKaleBeerRepository _repo;
        private readonly IMapper _mapper;

        public KaleBeerController(IKaleBeerRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet]
        public IEnumerable<KaleBeerDto> Index(KaleBeerParams parameters)
        {
            IEnumerable<KaleBeerDto> orderedBeers;

            try
            {
                var beers = _repo.GetAll().OrderBy(b => b.CreationDate)
                    .Skip((parameters.PageNumber - 1) * parameters.PageSize).Take(parameters.PageNumber);

                orderedBeers = _mapper.Map<IEnumerable<KaleBeerDto>>(beers);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }

            return orderedBeers;
        }

        [HttpPost]
        public KaleBeerDto AddNewKaleBeer([FromBody] KaleBeerDto kalebeer)
        {
            try
            {
                var beer = _mapper.Map<KaleBeer>(kalebeer);
                _repo.Add(beer);
                _repo.Save();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }

            return kalebeer;
        }
    }
}