import './App.css'
import Details from './Components/Details';
import { Route, Routes } from 'react-router-dom';
import UserDetails from './Components/UserDetails';

function App() {

  return (
    <div className="container">
      {/*react routing */}
      <Routes>
        <Route path='/' element={<Details />} />
        <Route path='/:name' element={<Details />} />
        <Route path='/user/' element={<UserDetails />} />
      </Routes>

    </div>
  );
}


export default App;
