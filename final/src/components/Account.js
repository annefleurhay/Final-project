import '../components/account.css'
import {Link} from 'react-router-dom'
function Account() {
    return (
    <>
    <div className='account'>
        
       {/* <p>Hi Annefleur</p>
        <p>Here are your plants!</p>*/}
        <h1>PlantPal</h1>
        <p><Link id="plantbabies" to='/plants'>My Plantbabies</Link></p>
        {/*<p><Link id="plantbabies" to='/plants'>My Plantbabies</Link></p>*/}
    </div>
    
    </>
    
    
    );
}

export default Account