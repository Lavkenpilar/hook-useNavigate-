import { useParams } from "react-router-dom"

export default function Personajes () {

    const { id }=useParams()
    return (
        <div className="mt-5">
            <h1>{id}</h1>
        </div>
    )
}