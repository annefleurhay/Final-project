import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


function PlantDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const plant = location.state;

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
      
      
    </div>
  );
  
}

export default PlantDetail;