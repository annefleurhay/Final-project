import '../components/account.css'
import {Link} from 'react-router-dom'
function Account() {
    return (
    <>
    <div className='account'>
        
        <h1>PlantPal</h1>
        <p><Link id="plantbabies" to='/plants'>My Plantbabies</Link></p>
        
    </div>
    </>
    );
}

export default Account