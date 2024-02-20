import './App.css';
import Navbar from './Components/NavBar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
// import banner_ac from './Components/Assets/Deluxe Acoustic.Satin See Thru Black.01.png'
// import banner_cl from './Components/Assets/slide1.png'

function App() {
  return (
      <div className='container'>
        <BrowserRouter>
        <Navbar/>
        <div className="sidebar"></div>
        <div className="main-content">
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/acoustic' element={<ShopCategory  category='acoustic'/>}/>
          <Route path='/classic' element={<ShopCategory  category='classic'/>}/>
          <Route path='/electric' element={<ShopCategory category='electric'/>}/>
          <Route path='/bass' element={<ShopCategory category='bass'/>}/>
          <Route path='/accessories' element={<ShopCategory category='accessories'/>}/>
          
          <Route path="product" element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/> 
          <Route path='/login' element={<Login/>}/> 
        </Routes>
        </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
