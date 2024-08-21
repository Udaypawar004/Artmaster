import React from 'react'
import Hero from './components/Hero'
import Playground from './Pages/Playground'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  
  return (
    <Router>
      <Routes>
        <Route  path='/' element={<Hero />}/>
        <Route  path='/playground' element={<Playground />}/>
      </Routes>
    </Router>
  )
}

export default App
