
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from "./components/Home"
import Personajes from "./components/Personajes"
import NotFound from './components/NotFound'
import './App.css'


export default function App() {
  
  return (
   <div className='App'>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>      
      <Route path="/personajes/:id" element={<Personajes/>}/> 
      <Route path='/NotFound' element={<NotFound/>}></Route>
    </Routes>   
    </BrowserRouter>
   </div>
  )
}
/*"/personajes/:id"  configuración de la ruta para el parámetro id en la URL*/

