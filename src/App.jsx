// import './App.css'
// import React from 'react';
// import FetchData from './FetchData'

// function App(){


//   return (
//     <FetchData />
//   )
// }

// export default App
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Prodi from './pages/Prodi';
import Mahasiswa from './pages/Mahasiswa';
import "./App.css";
import Notfound from './pages/Notfound';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/prodi' element={<Prodi />} />
        <Route path='/mahasiswa{npm}' element={<Mahasiswa />} />
        <Route path='/mahasiswa{npm}' element={<Mahasiswa />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
