import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Home () {
    //const [id, setId] = useState ("")
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
    const manejarSeleccion = (event) => {
        setSeleccion (event.target.value)
    }
    const irAPersonajes=()=>{
    navigate(`/personajes/${seleccion}`) 
    }

return (
    <div className="mt-5">
        <h1>React Router II</h1> 
        <select
        type="number"
        value={seleccion}
        onChange= {manejarSeleccion}>    
        <option value=""> Selecciona...</option> {/*opcion por defecto*/}
        {opciones.map ( (opcion)=>(
            <option key={opcion.id} value={opcion.id}>
                {opcion.nombre}
            </option>
       ))}       
        </select>      
        <button onDoubleClick={ irAPersonajes }>Buscar</button>
    </div>
) }