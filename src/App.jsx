import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Add from './Pages/Add'
import Admin from './Pages/Admin'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<Admin/> }path='/admin'/>
      <Route element={<Add/>} path='/add'/>
    </Routes>
    </BrowserRouter>
  )
}

export default App