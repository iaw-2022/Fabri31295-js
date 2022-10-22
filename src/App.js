import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CartProvider } from './context/cartContext'
import NotificationProvider from './notifications/NotificationProvider'
import { lazy, Suspense } from 'react';
import './App.css'

const NavBar = lazy(() => import('./components/ui/navbar'))
const Home = lazy(() => import('./components/home/home'))
const Portfolio = lazy(() => import('./components/portfolio/portfolio'))
const Store = lazy(() => import('./components/store/store'))
const Cart = lazy(() => import('./components/cart/cart'))
const Register = lazy(() => import('./components/register/register'))

function App() {

  return (
    <div className="App">
      <NotificationProvider>
        <CartProvider>
          <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path='/' element={<NavBar />}>
                  <Route path='/home' element={<Home />} />
                  <Route path='/portfolio' element={<Portfolio />} />
                  <Route path='/store' element={<Store />} />
                  <Route path='/cart' element={<Cart />} />
                  <Route path='/register' element={<Register />} />
                  <Route path='/' element={<Navigate replace to='/home' />} />
                </Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
        </CartProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;