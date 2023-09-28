import React from 'react'
import './App.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Problems from './pages/Problems/Problems'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/problems' element={<Problems/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App