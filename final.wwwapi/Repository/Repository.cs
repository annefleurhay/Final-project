using final.wwwapi.Data;
using final.wwwapi.Models;

namespace final.wwwapi.Repository
{
    public class Repository : IRepository
    {
        public Plant CreatePlant(Plant plant)
        {
            using(var db = new DataContext())
            {
                db.Plants.Add(plant);
                db.SaveChanges();
                return plant;
            }
        }

        public IEnumerable<Plant> GetPlants()
        {
            using(var db = new DataContext())
            {
                return db.Plants.ToList();
            }
        }

        public void UpdateWatering(UpdateWaterDate wateringDate)
        {
            using (var db = new DataContext())
            {
                var plant = db.Plants.FirstOrDefault(p => p.id == wateringDate.plantId);
                if (plant != null)
                {
                    plant.lastWatered = DateTime.UtcNow;
                    db.SaveChanges();
                }
            }
        }
    }
}
