using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TheKaleCartelWebApi.Data;

namespace TheKaleCartelWebApi.Repositories.Repository
{
    public abstract class Repository<T> : IRepository<T> where T : class
    {
        protected KaleDbContext _context;

        protected Repository(KaleDbContext context)
        {
            _context = context;
        }

        public virtual IQueryable<T> GetAll()
        {
            return _context.Set<T>();
        }

        public virtual T Get(Expression<Func<T, bool>> match)
        {
            return _context.Set<T>().Single(match);
        }

        public virtual T Add(T t)
        {
            _context.Set<T>().Add(t);
            return t;
        }

        public void Save()
        {
            _context.SaveChanges();
        }
    }
}
