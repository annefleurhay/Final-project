﻿using final.wwwapi.Models;

namespace final.wwwapi.Repository
{
    public interface IRepository
    {
        IEnumerable<Plant> GetPlants();
        void UpdateWatering(UpdateWaterDate wateringDate);
        Plant CreatePlant(Plant plant);

    }
}
