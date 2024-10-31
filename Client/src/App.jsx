import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './Pages/HomePage/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Policies from './Pages/Policies/Policies'
import PNF from './Pages/PNF/PNF'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/policies' element={<Policies/>}/>
        <Route path='*' element={<PNF/>}/>
      </Routes>
    </>
  )
}

export default App