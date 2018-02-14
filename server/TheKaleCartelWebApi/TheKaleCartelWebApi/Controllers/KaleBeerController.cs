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
        public IActionResult Index(KaleBeerParams parameters)
        {
            IEnumerable<KaleBeerDto> orderedBeers;

            var beers = _repo.GetAll().OrderBy(b => b.CreationDate)
                .Skip((parameters.PageNumber - 1) * parameters.PageSize).Take(parameters.PageNumber);

            orderedBeers = _mapper.Map<IEnumerable<KaleBeerDto>>(beers);
            
            return Ok(orderedBeers);
        }

        [HttpGet("name/{name}")]
        public IActionResult GetBeerByName(string name)
        {
          var beer = _repo.Get(b => b.Name == name);

          if (beer == null)
          {
            return BadRequest();
          }
          
          var orderedBeer = _mapper.Map<KaleBeerDetailsDto>(beer);
          return Ok(orderedBeer);
        }

        [HttpGet("id/{id}")]
        public IActionResult GetBeerById(int id)
        {
          var beer = _repo.Get(b => b.KaleBeerId == id);

          if (beer == null)
          {
            return BadRequest();
          }

      var orderedBeer = _mapper.Map<KaleBeerDetailsDto>(beer);
          return Ok(orderedBeer);
        }


        [HttpPost]
        public IActionResult AddNewKaleBeer([FromBody] KaleBeerDetailsDto kalebeer)
        {
          if (ModelState.IsValid)
          {
            var beer = _mapper.Map<KaleBeer>(kalebeer);
            _repo.Add(beer);

            return Ok(kalebeer);
          }
          else
          {
            return BadRequest(kalebeer);
          }

        }
    }
}
