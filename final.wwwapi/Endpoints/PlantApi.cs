using final.wwwapi.Models;
using final.wwwapi.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.Diagnostics.Contracts;
using System.Diagnostics.Eventing.Reader;

namespace final.wwwapi.Endpoints
{
    public static class PlantApi
    {
        public static void ConfigurePlantApi(this WebApplication app)
        {
            app.MapGet("/plants", GetPlants);
            app.MapPut("/plants/updateWatering", UpdateWatering);
            app.MapPost("/plants/new", CreatePlant);
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

            return Results.Ok(plants.OrderBy(p=>p.id));
        }


        private static void CalculateWateringStatus(PlantResponse plantResponse, DateTime lastWatered, int dayfrequency)
        {
            WateringPal wateringPal = new WateringPal();
            plantResponse.needsWater = wateringPal.wateringtime(lastWatered, dayfrequency);

        }

        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]

        public static async Task<IResult> UpdateWatering(IRepository repository, UpdateWaterDate updateWaterDate) //Zet er een id in in plaats van updatewaterdate maar dit hoeft niet.
        {
            var plants = repository.GetPlants();
            var excistingPlant = plants.FirstOrDefault(p => p.id == updateWaterDate.plantId);

            if (excistingPlant != null) //If the plant is found
            {
                WateringPal waterPal = new WateringPal();
                if (waterPal.wateringtime(excistingPlant.lastWatered, excistingPlant.dayfrequency))
                {
                    excistingPlant.lastWatered = DateTime.UtcNow;
                    repository.UpdateWatering(updateWaterDate);
                    return Results.NoContent();
                }
                 else
                {
                    return Results.Ok();
                }
            }
                return Results.NotFound();

            
       
           
            

            
        }


        [ProducesResponseType(StatusCodes.Status201Created)]
        public static async Task<IResult> CreatePlant(PlantPost plantPost, IRepository repository)
        {
            Plant plant = new Plant();

            plant.place = plantPost.place;
            plant.lastWatered = DateTime.UtcNow;
            plant.dayfrequency = plantPost.dayfrequency;
            plant.name = plantPost.name;
            plant.userId = 1;
            repository.CreatePlant(plant);

            return Results.Ok(plant);
            
        }


    }
}
