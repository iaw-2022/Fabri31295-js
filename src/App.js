import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CartProvider } from './context/cartContext'
import NotificationProvider from './notifications/NotificationProvider'
import { lazy, Suspense } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import './App.css'

const NavBar = lazy(() => import('./components/ui/navbar'))
const Home = lazy(() => import('./components/home/home'))
const Portfolio = lazy(() => import('./components/portfolio/portfolio'))
const Store = lazy(() => import('./components/store/store'))
const Cart = lazy(() => import('./components/cart/cart'))
const Register = lazy(() => import('./components/register/register'))

const firebaseConfig = {
  apiKey: "AIzaSyDBHZ9OZGKLHZkZDc0lLBam2OjhTv4-BiA",
  authDomain: "webjs-f949b.firebaseapp.com",
  projectId: "webjs-f949b",
  storageBucket: "webjs-f949b.appspot.com",
  messagingSenderId: "362341515411",
  appId: "1:362341515411:web:1899ec6adb41277f7f8d66",
  measurementId: "G-ZVNPCR36DY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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