import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar.js'
import Magasin from './Components/Magasin.js';
import Contact from './Components/Contact.js';
import Shopcart from './Components/Shopcart.js';
import Accueil from './Components/Accueil.js';

function App() {
  return (
    <Router>
      <div className='app'>
       <NavigationBar/>
       <Routes>
        <Route path='/' element ={<Accueil/>}/>
        <Route path='/magasin' element={<Magasin/>}/>
        
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/panier' element={<Shopcart/>}/>
       </Routes>
      </div>
    </Router>
  );
}

export default App;
