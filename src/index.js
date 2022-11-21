import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import { BackgroundContextProvider } from './context/ColorPag';
import './index.css';
import Contato from './pages/contato/Contato';
import Curriculo from './pages/curriculo/Curriculo';
import Home from './pages/Home/App';
import Portifolio from './pages/portifolio/portifolio';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BackgroundContextProvider>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/curriculo' element={<Curriculo/>}/>
      <Route path='/portifolio' element={<Portifolio/>}/>
      <Route path='/contato' element={<Contato/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </BackgroundContextProvider>
  </React.StrictMode>
);
