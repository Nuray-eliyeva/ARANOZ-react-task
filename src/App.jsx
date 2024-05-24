import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Add from './Pages/Add'
import Admin from './Pages/Admin'
import Edit from './Pages/Edit'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<Admin/> }path='/admin'/>
      <Route element={<Add/>} path='/add'/>
      <Route element={<Edit/>} path='/edit/:id'/>
    </Routes>
    </BrowserRouter>
  )
}

export default App