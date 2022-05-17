import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import NavBar from './layouts/navbar';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Store from './components/store';
import Profile from './components/profile';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar/>}>
            <Route index element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/store' element={<Store/>}/>
            <Route path='/profile' element={<Profile/>}/>

            <Route path='*' element={<Navigate replace to='/'/>}/>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
