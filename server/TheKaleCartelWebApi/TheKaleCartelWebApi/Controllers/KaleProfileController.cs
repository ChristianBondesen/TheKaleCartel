using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TheKaleCartelWebApi.Controllers.Parameters;
using TheKaleCartelWebApi.DTO;
using TheKaleCartelWebApi.DTO.Profile;
using TheKaleCartelWebApi.Models;
using TheKaleCartelWebApi.Repositories.KaleProfileRepository;

namespace TheKaleCartelWebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[Controller]")]
    public class KaleProfileController : Controller
    {
        private readonly IKaleProfileRepository _repo;
        private readonly IMapper _mapper;

        public KaleProfileController(IKaleProfileRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult Index()
        {
            var profiles = _mapper.Map<IEnumerable<KaleProfileDto>>(_repo.GetAll().OrderBy(p => p.KaleProfileId));

          if (profiles == null)
          {
            return BadRequest();
          }

            return Ok(profiles);
        }

        [HttpGet("{name}")]
        public IActionResult GetByName(string name)
        {
            var profile = _mapper.Map<KaleProfileDetailsDto>(_repo.Get(p => p.Name == name));

          if (profile == null)
          {
            return BadRequest();
          }

            return Ok(profile);
        }
    }
}
