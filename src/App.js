import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CartProvider } from './context/cartContext'
import './App.css'

import NavBar from './components/ui/navbar'
import Home from './components/home/home'
import Store from './components/store/store'
import Cart from './components/cart/cart'
import Portfolio from './components/portfolio/portfolio'
import Register from './components/register/register'

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<NavBar/>}>
              <Route path='/home' element={<Home/>}/>
              <Route path='/portfolio' element={<Portfolio/>}/>
              <Route path='/store' element={<Store/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/' element={<Navigate replace to='/home'/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
