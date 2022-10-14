import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CartProvider } from './context/cartContext'
import NotificationProvider from './notifications/NotificationProvider'
import { lazy, Suspense, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { getAuth, signInAnonymously } from "firebase/auth"
import { getToken, onMessage } from "firebase/messaging";
import { messaging } from './firebase';
import './App.css'

const NavBar = lazy(() => import('./components/ui/navbar'))
const Home = lazy(() => import('./components/home/home'))
const Portfolio = lazy(() => import('./components/portfolio/portfolio'))
const Store = lazy(() => import('./components/store/store'))
const Cart = lazy(() => import('./components/cart/cart'))
const Register = lazy(() => import('./components/register/register'))

function App() {

  const login = () => {
    signInAnonymously(getAuth()).then(user => console.log(user))
    activateMessages()
  }

  const activateMessages = async () => {

    const messagingResolve = await messaging;

    const token = await getToken(messagingResolve, {
      vapidKey: "BNi3xjbJKrRmuAKiaxovpTYtsQecnLGRScnaWmsjt3j2PSOLEXK88VkIPFZQCmJHAuSXdS2vg3t2k5vm_bqeq50"
    }).catch(err => console.log(err));

    if (token) console.log("Your token is: ", token);
    else console.log("Something went wrong with your token");
  }

  const onMessageListener = async () =>
    new Promise((resolve) =>
      (async () => {
        const messagingResolve = await messaging;
        onMessage(messagingResolve, (payload) => {
          console.log('On message: ', messaging, payload);
          toast(payload.notification.title + " " + payload.notification.body)
          resolve(payload);
        });
      })()
    );

    useEffect(() => {
      if (messaging) {
        login();
      }
      onMessageListener();
    }, [login, onMessageListener]);


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