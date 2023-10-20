import './App.css';
import Plant from './components/Plant'
import PlantPost from './components/PlantPost';
import PlantDetail from './components/PlantDetail';
import Account from './components/Account';
//import { useState} from 'react';
import { Routes, Route} from 'react-router-dom';
//import DataContext from './components/DataContext';

function App() {
  return (
    <div className='App'>
      {/*<DataContext.Provider>*/}
      <Account/>
      
      
      
      {/*<Plant/> */}
      
      <Routes>
        <Route path='/plants' element={<Plant/>}/>
        <Route path='/plants/:id' element={<PlantDetail/>} />
        <Route path='/plants/new' element={<PlantPost/>}/>
      </Routes>
      {/*</DataContext.Provider>*/}
    </div>
  );
}

export default App;
