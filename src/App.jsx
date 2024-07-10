// import { useState } from 'react'
import './App.css';
import './index.css';

import Header from './component/Header.jsx'
import { Route, Routes } from 'react-router';
import Shop from './Pages/Shop.jsx';
import Cart from './Pages/Cart.jsx';
import Footer from './component/Footer.jsx';
import Checkout from './Pages/Checkout.jsx';



function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path={"/" } element ={<Shop/>}/>
    <Route path={"/cart" } element ={<Cart/>}/>
    <Route path={"/checkout" } element ={<Checkout/>}/>
</Routes>
<Footer/>
    
    </>
  )
}

export default App
