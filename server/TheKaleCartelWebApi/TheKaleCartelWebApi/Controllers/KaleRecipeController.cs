using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TheKaleCartelWebApi.DTO.Recipies;
using TheKaleCartelWebApi.Models;
using TheKaleCartelWebApi.Repositories.KaleRecipeRepository;

namespace TheKaleCartelWebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/KaleRecipe")]
    public class KaleRecipeController : Controller
    {
      private readonly IMapper _mapper;
      private readonly IKaleRecipeRepository _repo;

      public KaleRecipeController(IMapper mapper, IKaleRecipeRepository repo)
      {
        _mapper = mapper;
        _repo = repo;
      }
      
      [HttpGet]
      public IActionResult Index()
      {
        var recipies = _mapper.Map<IEnumerable<KaleRecipeDto>>(_repo.GetAll());

        return Ok(recipies);
      }

      [HttpGet("name/{name}")]
      public IActionResult GetByName(string name)
      {
        var orderedRecipe = _repo.Get(r => r.Name == name);

        if (orderedRecipe != null)
        {
          var recipe = _mapper.Map<KaleRecipeDetailsDto>(orderedRecipe);
          return Ok(recipe);
        }
        return NotFound(name);
      }

      [HttpPost]
      public IActionResult AddRecipe([FromBody] KaleRecipeDetailsDto recipe)
      {
        var newRecipe = _mapper.Map<KaleRecipe>(recipe);

        _repo.Add(newRecipe);

        return Ok(recipe);
      }
    }
}
