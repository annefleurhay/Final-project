namespace final.wwwapi.Models
{
    
    public class WateringPal
    {
        public bool wateringtime(DateTime lastwatered, int dayfrequency)
        {      
            DateTime dueDate = lastwatered.AddDays(dayfrequency);
            DateTime today = DateTime.UtcNow;

            if (today >= dueDate)
            {
                return true;
            }
            return false;
        }
    }
}
