import './App.css';
import Plant from './components/Plant'
import PlantPost from './components/PlantPost';
import PlantDetail from './components/PlantDetail';
import Account from './components/Account';
import { Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      
      <Account/>
      
      <Routes>
        <Route path='/plants' element={<Plant/>}/>
        <Route path='/plants/:id' element={<PlantDetail/>} />
        <Route path='/plants/new' element={<PlantPost/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
