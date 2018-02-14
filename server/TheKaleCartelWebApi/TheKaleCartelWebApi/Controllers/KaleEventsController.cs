using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheKaleCartelWebApi.DTO.Events;
using TheKaleCartelWebApi.Models;
using TheKaleCartelWebApi.Repositories.KaleEventRepository;

namespace TheKaleCartelWebApi.Controllers
{
  [Produces("application/json")]
  [Route("api/KaleEvents")]
  public class KaleEventsController : Controller
  {
    private readonly IKaleEventRepository _repo;
    private readonly IMapper _mapper;

    public KaleEventsController(IKaleEventRepository repo, IMapper mapper)
    {
      _repo = repo;
      _mapper = mapper;
    }

    [HttpGet]
    public async Task<ActionResult> Get()
    {
      var respone = await this._repo.GetAll().Include(i=>i.KaleProfile).Include(i=>i.KaleBeers).Include(i=>i.KaleRecipes).ToListAsync();

      return Ok(_mapper.Map<IEnumerable<GetEventDTO>>(respone));
    }

    [HttpGet("{kaleevent}")]
    public async Task<ActionResult> GetById(int kaleevent)
    {
      var response = await this._repo.GetAll().FirstOrDefaultAsync(i => i.KaleEventId == kaleevent);
      if (response == null)
      {
        return BadRequest("error");
      }
      return Ok(_mapper.Map<GetEventDTO>(response) );
    }

    [HttpPost]
    public ActionResult Post([FromBody] EventPostDTO dankmemes)
    {
      if (ModelState.IsValid)
      {
        this._repo.Add(_mapper.Map<KaleEvent>(dankmemes));
        return Created("created", dankmemes);
      }
      else
      {
        return BadRequest("Input not validated");
      }
    }
  }
}
