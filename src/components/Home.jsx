import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Home () {
// const [id, setId] = useState ("")
    const [seleccion, setSeleccion] = useState("")
    const navigate = useNavigate()
    
    const opciones = [
        {id:1, nombre:"Opción1"},
        {id:2, nombre:"Opción2"},
        {id:3, nombre:"Opción3"},
        {id:4, nombre:"Opción4"},
        {id:5, nombre:"Opción5"},
        {id:6, nombre:"Opción6"},
        {id:7, nombre:"Opción7"},
        {id:8, nombre:"Opción8"},
        {id:9, nombre:"Opción9"},
        {id:10, nombre:"Opción10"},
    ]
    console.log (opciones[2].id)
  // Función para manejar la selección
    const manejarSeleccion = (event) => {
        setSeleccion (event.target.value)

      }
// Función para manejar la redirección
const manejarBusqueda = () => {

   navigate (`/personajes/${seleccion}`)

   /* if (seleccion == opciones[2].id) {
        // si la selección corresponde al id valido entonces
        
            navigate(`/personajes/`) 
        }
      else {
      
      navigate(`/NotFound/`)


    }*/
}

return (
    <div className="mt-5">
        <h1>React Router II</h1> 
        <select
         value={seleccion}
        onChange= {manejarSeleccion}>    
        <option value=""> Selecciona...</option> {/*opcion por defecto*/}
        {opciones.map ( (opcion)=>(
            <option key={opcion.id} value={opcion.id}>
                {opcion.nombre}
            </option>
       ))}       
        </select>      
        <button onClick={ manejarBusqueda }>Buscar</button>
    </div>
) }