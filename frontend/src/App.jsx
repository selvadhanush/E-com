import './App.css'
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <div>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/mens" element={<ShopCategory category="men"/>} />
        <Route path="/womens" element={<ShopCategory category="women"/>} />
        <Route path="/kids" element={<ShopCategory category="kid"/>} />
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
