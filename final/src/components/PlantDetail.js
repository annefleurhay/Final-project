import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


function PlantDetail() {
  //const { id } = useParams();
  //console.log(id);
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
      <p>Needs water? {plant.needsWater ? 'Yes' : 'No'}</p>
    </div>
    <button onClick={()=> navigate('/plants')}>Go Back</button>
      
      {/*<p>Location: {plant.place}</p>
      <p>Last Watered: {plant.lastWatered}</p>
  <p>Needs water? {plant.needsWater ? 'Yes' : 'No'}</p>*/}
    </div>
  );
  
}

export default PlantDetail;