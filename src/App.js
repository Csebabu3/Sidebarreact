import React from 'react'
import './App.css';
import Sidebar from './Components/Sidebar'
import Dashboard from './Pages/Dashboard'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './Pages/About';
import Comments from './Pages/Comments';
import Analytics from './Pages/Analytics';
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';

function App() {
  return (
   <BrowserRouter>
   <Sidebar>
      <Routes>
        <Route path="/"element={<Dashboard/>} />
        <Route path="/Dashboard"element={<Dashboard/>} />
        <Route path="/About"element={<About/>} />
        <Route path="/Comments"element={<Comments/>} />
        <Route path="/Analytics"element={<Analytics/>} />
        <Route path="/Product"element={<Product/>} />
        <Route path="/ProductList"element={<ProductList/>} />

        
      </Routes>
      </Sidebar>
   </BrowserRouter>
  )
}

export default App
