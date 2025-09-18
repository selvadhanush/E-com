import './App.css'
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Footer from './Components/Footer/Footer';
import MenBanner from './Components/Assets/Frontend_Assets/banner_mens.png';
import WomenBanner from './Components/Assets/Frontend_Assets/banner_women.png';
import KidBanner from './Components/Assets/Frontend_Assets/banner_kids.png';
function App() {

  return (
    <div>
    <BrowserRouter>
      <Navbar/>
      <Routes>

      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
    
  )
}

export default App
