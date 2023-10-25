using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace final.wwwapi.Models
{
    public class PlantResponse
    {
            public int id { get; set; }
            public string name { get; set; }
            public string place { get; set; }
            public DateTime lastWatered { get; set; } //make it an int 
            public int dayfrequency { get; set; } // hoe vaak water geven 
                                                  //public TimeSpan wateringInterval { get; set; } //Timespan interval = TimeSpan.FromDays(5); 5 dagen, use timespan for the calculation and not for the date stored in the database
            public bool needsWater { get; set; }

            [JsonIgnore]
            [ForeignKey("User")]
            public int userId { get; set; }

    }
}
