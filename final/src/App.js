import './App.css';
import Plant from './components/Plant'
import PlantDetail from './components/PlantDetail';
import Account from './components/Account';
//import { useState} from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import DataContext from './components/DataContext';

function App() {
  return (
    <div>
      <DataContext.Provider>
    
      <Account/>
      <p><Link to='/plants'>My Plantbabies</Link></p>
      {/*<Plant/>*/}
      
      <Routes>
        <Route path='/plants' element={<Plant/>}/>
        <Route path='/plants/:id' element={<PlantDetail/>} />
      </Routes>
      </DataContext.Provider>
    </div>
  );
}

export default App;
