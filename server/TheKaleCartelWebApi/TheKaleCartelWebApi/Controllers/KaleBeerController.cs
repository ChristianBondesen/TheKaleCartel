using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TheKaleCartelWebApi.Controllers.Parameters;
using TheKaleCartelWebApi.DTO;
using TheKaleCartelWebApi.DTO.Beer;
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

            var beers = _repo.GetAll().OrderBy(b => b.CreationDate)
                .Skip((parameters.PageNumber - 1) * parameters.PageSize).Take(parameters.PageNumber);

            orderedBeers = _mapper.Map<IEnumerable<KaleBeerDto>>(beers);
            
            return orderedBeers;
        }

        [HttpGet("name/{name}")]
        public KaleBeerDetailsDto GetBeerByName(string name)
        {
          var beer = _repo.Get(b => b.Name == name);
          var orderedBeer = _mapper.Map<KaleBeerDetailsDto>(beer);
          return orderedBeer;
        }

        [HttpGet("id/{id}")]
        public KaleBeerDetailsDto GetBeerById(int id)
        {
          var beer = _repo.Get(b => b.KaleBeerId == id);
          var orderedBeer = _mapper.Map<KaleBeerDetailsDto>(beer);
          return orderedBeer;
        }


        [HttpPost]
        public KaleBeerDetailsDto AddNewKaleBeer([FromBody] KaleBeerDetailsDto kalebeer)
        {
            var beer = _mapper.Map<KaleBeer>(kalebeer);
            _repo.Add(beer);

            return kalebeer;
        }
    }
}
