import React from 'react';
import '../components/plantdetails.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect} from 'react'
import happyPlant from '../images/happy-plant.png';
import sadPlant from '../images/wiltered-plant.png';


function PlantDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const [updating, setUpdating] = useState(false)
  const plant = location.state;

  const updateWatering = async () => {
    setUpdating(true); 

    try {
      const response = await fetch('https://localhost:7138/plants/updateWatering', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ plantId: plant.id }),
      });

      if (response.status === 204) {
        alert('Yay, thank you for the water!');
      } else if (response.status === 404) {
        alert('Plant id not found.');
      }else if(response.status === 200){
          alert('I do not need water right now')
      } else {
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

  
  return (
    <div className='plantdetail'>
      <div>
        <h2>{plant.name}</h2>
      
        <img src={plant.needsWater ? sadPlant : happyPlant } alt='plant mood'/>
      </div>

    <button onClick={()=> navigate('/plants')}>Go Back</button>
    <button onClick={updateWatering} disabled={updating}>Water me</button>
    
      
    </div>
  );
  
}

export default PlantDetail;