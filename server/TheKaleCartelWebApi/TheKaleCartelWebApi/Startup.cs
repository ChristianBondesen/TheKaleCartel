using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Swashbuckle.AspNetCore.Swagger;
using TheKaleCartelWebApi.Data;
using TheKaleCartelWebApi.Repositories.KaleBeerRepository;
using TheKaleCartelWebApi.Repositories.KaleEventRepository;
using TheKaleCartelWebApi.Repositories.KaleProfileRepository;
using TheKaleCartelWebApi.Repositories.KaleRecipeRepository;

namespace TheKaleCartelWebApi
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddDbContext<KaleDbContext>();
      services.AddTransient<IKaleProfileRepository, KaleProfileRepository>();
      services.AddTransient<IKaleBeerRepository, KaleBeerRepository>();
      services.AddTransient<IKaleRecipeRepository, KaleRecipeRepository>();
      services.AddTransient<IKaleEventRepository, KaleEventRepository>();
      services.AddSwaggerGen(c =>
      {
        c.SwaggerDoc("v1", new Info { Title = "The Kale Cartel", Version = "v1" });
      });
      services.AddCors();
      services.AddAutoMapper(typeof(Startup));

     services.AddMvc();
      services.AddMvcCore().AddApiExplorer();
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }
      app.UseSwagger();
      app.UseSwaggerUI(c =>
      {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "The Kale Cartel V1");
      });
      app.UseCors(options =>
        options.AllowAnyOrigin());
      app.UseMvc(routes =>
      {
        // SwaggerGen won't find controllers that are routed via this technique.
        routes.MapRoute("default", "{controller=KaleProfile}/{action=Index}/{id?}");
      });
    }
  }
}
