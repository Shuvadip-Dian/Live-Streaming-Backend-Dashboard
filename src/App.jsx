import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import Live from "./components/Live"
import Navbar from './components/Navbar'
import Highlight from './components/Highlight'

function App() {
  return (
    <>
    <Navbar/>
    <Outlet />
    </>
  )
}

export default App
