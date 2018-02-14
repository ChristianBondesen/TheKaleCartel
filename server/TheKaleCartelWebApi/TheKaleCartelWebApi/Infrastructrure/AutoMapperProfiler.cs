using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using TheKaleCartelWebApi.DTO;
using TheKaleCartelWebApi.Models;

namespace TheKaleCartelWebApi.Infrastructrure
{
    public class AutoMapperProfiler : Profile
    {
        public AutoMapperProfiler()
        {
            CreateMap<KaleProfile, KaleProfileDto>().ReverseMap()
                .ForMember(p => p.KaleRecipes, opt => opt.Ignore())
                .ForMember(p => p.KaleBeers, opt => opt.Ignore())
                .ForMember(p => p.Description, opt => opt.Ignore());

            CreateMap<KaleProfile, KaleProfileDetailsDto>().ReverseMap();
            CreateMap<KaleBeer, KaleBeerDto>().ReverseMap();
            CreateMap<KaleRecipe, KaleRecipeDto>();
        }
    }
}
