import { Route , Routes } from "react-router-dom"
import App from "../App"
import MovieDetail from "./dinamicRouting/MovieDetail"

export function Rutas (){

    return (
      
        <>
            <Routes>
                <Route path='/' element={ <App />} />
                <Route path='/:id' element={ <MovieDetail/>} />
            </Routes>
        </>
    )
}