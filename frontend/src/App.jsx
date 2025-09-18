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
        <Route path="/" element={<Shop/>} />
        <Route path="/mens" element={<ShopCategory banner={MenBanner} category="men"/>} />
        <Route path="/womens" element={<ShopCategory banner={WomenBanner} category="women"/>} />
        <Route path="/kids" element={<ShopCategory banner={KidBanner} category="kid"/>} />
        <Route path="/Product" element={<Product/>}>
          <Route path=":ProductId" element={<Product/>}/><Route/>
         </Route>
        <Route path='/Cart'element={<Cart/>}/>
        <Route path='/login'element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
    
  )
}

export default App
