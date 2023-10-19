using System.ComponentModel.DataAnnotations.Schema;

namespace final.wwwapi.Models
{

    [NotMapped]
    public class PlantPost
    {
        public string name { get; set; }
        public string place {  get; set; }
        public int dayfrequency { get; set; }

       

    }
}
