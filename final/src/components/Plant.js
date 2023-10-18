import '../components/account.css'

import { useState, useEffect } from "react";
import { useNavigate, Link} from 'react-router-dom';




function Plant(){
 const [plants, setplants] = useState([])
 const navigate = useNavigate();

 async function plantData(){
    const response = await fetch('https://localhost:7138/plants')
    const data = await response.json()
    //console.log(json)
    setplants(data)
 }
 useEffect(()=> {
    plantData()
 }, [])


return (
    <div className='plant'>
      
      
      {plants.map((plant, index) => (
       <ul key={index} className={plant.needsWater ? 'needs-water': ''}>
          <li><button><Link to={`/plants/${plant.id}`} state={plant}>{plant.name}</Link></button></li>
          
      
        </ul>
        
      ))}
      <Link to={`/plants/new`}><button>Add plant</button></Link>

      
      <button onClick={()=> navigate('/')}>Go Back</button>
      
    </div>
    
  );
  
}

export default Plant;