using final.wwwapi.Data;
using final.wwwapi.Models;

namespace final.wwwapi.Repository
{
    public class Repository : IRepository
    {
        public IEnumerable<Plant> GetPlants()
        {
            using(var db = new DataContext())
            {
                return db.Plants.ToList();
            }
        }
    }
}
