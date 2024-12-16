import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom';
import Live from './components/Live.jsx';
import Highlight from './components/Highlight'
import Home from './pages/Home.jsx'


const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/live' element={<Live/>}/>
      <Route path='/highlight' element={<Highlight/>}/>
    </Route>
  )
  
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={routes}/>
  </>
)
