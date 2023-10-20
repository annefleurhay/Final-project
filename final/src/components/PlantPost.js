import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../components/plantPost.css'

export default function PlantPost(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        place: '',
        dayfrequency:''
    }
        
    )

    const handleChange = (event )=> { 
        const { name, value} = event.target;

        setFormData({...formData,
            [name]: value
        })
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(formData);
        fetch('https://localhost:7138/plants/new', 
        {method: 'POST', body: JSON.stringify(formData), 
        headers: {'Content-type': 'application/json; charset=UTF-8',}
    })
    .then(()=>{
        navigate('/plants');
        
    })
    


    }

    return (
            <>
            <h2>Add your plantbaby</h2>
            <form className="form" onSubmit={handleSubmit}>
                
                <div className="form-input">

                    <label>Name</label>
                    <input type='text' name="name" onChange={handleChange} value={formData.name}></input>

                    <label>Place</label>
                    <input type='text' name="place" onChange={handleChange} value={formData.place}></input>

                    <label>How many days between watering?</label>
                    <input type='text' name="dayfrequency" onChange={handleChange} value={formData.dayfrequency}></input>


                </div>
                <input type='submit' value="Submit!"/>


            </form>


            </>


    )


}