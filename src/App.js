import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

import NavBar from './components/ui/navbar'
import Home from './components/home/home'
import Store from './components/store/store'
import Cart from './components/cart/cart'
import Portfolio from './components/portfolio/portfolio'
import Profile from './components/profile/profile'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/store' element={<Store/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='*' element={<Navigate replace to='/'/>}/>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
