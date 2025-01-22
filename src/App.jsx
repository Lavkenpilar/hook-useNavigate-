
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from "./components/Home"
import Personajes from "./components/Personajes"
import './App.css'


export default function App() {
  
  return (
   <div className='App'>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/personajes/:id" element={<Personajes/>}/>
    </Routes>   
    </BrowserRouter>
   </div>
  )
}


