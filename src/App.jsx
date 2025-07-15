import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Features from './components/Feature'
import Courses from './components/Courses'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {

  return (
    <>
   <Header/>
   <Features/>
   <Courses/>
   <Testimonials/>
   <Footer/>
    </>
  )
}

export default App
