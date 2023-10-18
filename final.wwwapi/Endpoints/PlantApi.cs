using final.wwwapi.Models;
using final.wwwapi.Repository;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics.Contracts;

namespace final.wwwapi.Endpoints
{
    public static class PlantApi
    {
        public static void ConfigurePlantApi(this WebApplication app)
        {
            app.MapGet("/plants", GetPlants);
        }


        [ProducesResponseType(StatusCodes.Status200OK)]
        public static async Task<IResult> GetPlants(IRepository repository) //write the water function in here
        {
            var plantResults = repository.GetPlants();
            List<PlantResponse> plants = new List<PlantResponse>();
            foreach(var plant in plantResults)
            {
                WateringPal wateringPal = new WateringPal();
                PlantResponse plantResponse = new PlantResponse();
                plantResponse.name = plant.name;
                plantResponse.id = plant.id;
                plantResponse.place = plant.place;
                plantResponse.lastWatered = plant.lastWatered;
                plantResponse.dayfrequency = plant.dayfrequency;
                plantResponse.needsWater = wateringPal.wateringtime(plant.lastWatered, plant.dayfrequency);
                CalculateWateringStatus(plantResponse, plant.lastWatered, plant.dayfrequency);
                plants.Add(plantResponse);
               
            }





            return Results.Ok(plants);
        }
        private static void CalculateWateringStatus(PlantResponse plantResponse, DateTime lastWatered, int dayfrequency)
        {
            WateringPal wateringPal = new WateringPal();
            plantResponse.needsWater = wateringPal.wateringtime(lastWatered, dayfrequency);

        }

        
    }
}
