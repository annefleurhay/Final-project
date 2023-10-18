import React from 'react';

function PlantDetail({plant}) {
  return (
    <div>
      <h2>Details for {plant.name}</h2>
      <p>Location: {plant.place}</p>
      <p>Last Watered: {plant.lastWatered}</p>
      <p>Needs water? {plant.needsWater ? 'Yes' : 'No'}</p>
    </div>
  );
}

export default PlantDetail;