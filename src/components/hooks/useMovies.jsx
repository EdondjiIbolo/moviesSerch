import { useEffect, useState } from "react"
import {results as initialMovies} from '../mocks/mocks-response.json'
export const useMovies = ()=>{
    const apikey = 'fbd037a93d5372afc504eab573259665'
    const [movies , setMovies] = useState([initialMovies])
    const [pagina , setPagina] = useState(1)
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=${pagina}`)
        .then(res => res.json())
        .then(results =>{
          const newMovies = results.results
          setMovies(newMovies)
        })
        document.documentElement.scrollTop = 0;
    },[pagina])
    
    return {movies , setPagina , setMovies, pagina}
  }