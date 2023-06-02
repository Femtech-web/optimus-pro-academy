import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home, Courses, Auth } from './pages'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  return (
    <Router basename='/'>
      <div className='h-screen relative'>
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/courses' element={<Courses />}/>
            <Route  exact path='/auth'  element={<Auth />} />
          </Routes>
      </div>
    </Router>
  )
}

export default App
