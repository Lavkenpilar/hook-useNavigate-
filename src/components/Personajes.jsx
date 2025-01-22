import { useParams } from "react-router-dom"
import { useState, useEffect }  from "react"
import axios from "axios"
// axios es una libreria popular que permite realizr peticiones http, se instala en la terminal a través de npm install axios
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export default function Personajes () {

    const { id }=useParams() // se captura el id de la URL

    const [personaje, setPersonaje]= useState ("") // estado para almacenar los estados

    useEffect (()=>{
        fetch (`https://rickandmortyapi.com/api/character/${id}`)
        .then ((res)=>res.json())
        .then ((data)=>{
            console.log(data) // muestra los datos en consola
            setPersonaje(data) // se guardan los datos del personaje en el estado
        })
        .catch ((error)=>{
            console.error ("Error fetching data:", error)//manejo de errores
        })
    },[id]) // el efecto se ejecuta cada vez que el id cambie
    
    return (
        <div className="mt-5">
        {personaje ? (
             <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={personaje.image} alt= {personaje.name} />
      <Card.Body>
        <Card.Title>{personaje.name}</Card.Title>
        <Card.Text>
         Especie: {personaje.species} <br/>       
         Estado: {personaje.status} <br/>
         Genero {personaje.gender}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

            
        ):(
            <p>Cargando...</p>
        )}
        </div>
    )
}