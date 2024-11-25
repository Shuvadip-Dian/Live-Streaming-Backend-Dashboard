import { useEffect, useState } from 'react'
import './App.css'
import Live from "./components/Live"
import Navbar from './components/Navbar'
import Highlight from './components/Highlight'

function App() {
  return (
    <>
    <Navbar/>
    <Live/>
    <Highlight/>
    </>
  )
}

export default App
