import '../components/plant.css'

import { useState, useEffect } from "react";
import { Link} from 'react-router-dom';




function Plant(){
 const [plants, setplants] = useState([])
 /*const navigate = useNavigate();*/

 async function plantData(){
    const response = await fetch('https://localhost:7138/plants')
    const data = await response.json()
    //console.log(json)
    setplants(data)
 }
 useEffect(()=> {
    plantData()
 }, [])

//<p><button onClick={()=> navigate('/')}>Go Back</button></p>
return (
    <div className='plant'>

        <p>Hi Annefleur</p>
        <p>Here are your plants!</p>
      
      <p><Link id="add-button" to={`/plants/new`}>Add plant</Link></p>
      
      <div className='grid'>
        {plants.map((plant, index) => (
       <ul key={index} className={plant.needsWater ? 'needs-water': ''}>
          <div className='plant-grid' classname={plant.needsWater ? 'needs-water': ''}><li><Link to={`/plants/${plant.id}`} state={plant}>{plant.name}</Link></li></div>
          
      
        </ul>
        
      ))}</div>
      
      

      
      
      
    </div>
    
  );
  
}

export default Plant;