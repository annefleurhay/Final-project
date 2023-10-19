import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect} from 'react'


function PlantDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const [updating, setUpdating] = useState(false)
  const plant = location.state;

  const updateWatering = async () => {
    setUpdating(true); // Zet de status op 'updating' om te tonen dat het verzoek wordt verwerkt

    try {
      const response = await fetch('https://localhost:7138/plants/updateWatering', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ plantId: plant.id }),
      });

      if (response.status === 204) {
        // Update is geslaagd
        alert('Yay, thank you for the water!');
      } else if (response.status === 404) {
        // Plant niet gevonden
        alert('Plant id not found.');
      } else {
        // Andere foutafhandeling
        alert('Oops, something went wrong');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setUpdating(false); 
    }
    navigate('/plants')
    
  };

  useEffect(() => {
    
  }, []);

  if (!plant) {
    return <p>Loading...</p>

  }
  return (
    <div>
      <div>
      <h2>{plant.name}</h2>
      <p>Location: {plant.place}</p>
      <p>Needs water? {plant.needsWater ? 'Yes, I am thirsty!' : 'No, I am good.'}</p>
    </div>
    <button onClick={()=> navigate('/plants')}>Go Back</button>
    <button onClick={updateWatering} disabled={updating}>Water me</button>
      
    </div>
  );
  
}

export default PlantDetail;