// React imports
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// CSS imports
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Local imports
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return(
  <BrowserRouter>
    <Routes>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/home" element={<Home/>}/>
      </Routes>
  </BrowserRouter>
  )
  
}

export default App;
