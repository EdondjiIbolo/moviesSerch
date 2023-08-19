
import { useEffect, useState } from 'react'
import './header.css'
export function Header({setMovies}){

    const [searchMovie , setSearchMovie] = useState('')
    const [search , setSearch] =useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setSearch(!search)
        console.log(search)

    }
    useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/search/movie?query=${searchMovie}&api_key=fbd037a93d5372afc504eab573259665`)
    .then(res=>{
        if(res.ok){
            return res.json()
        }
        else{
            throw new Error('Error en la solicitud')
        }
    }
    )
    .then(data=> {
        const newMovies = data.results 
        setMovies(newMovies)
    })
    document.documentElement.scrollTop = 0;
    },[search])
    
    return(
        <header>
            <h1>Tu mejor buscador de peliculas</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <input onChange={(e)=>{setSearchMovie(e.target.value)}}  type="text" placeholder='Naruto , Blvck Clover , Dragon Ball ...'/>
                    <button>Search</button>
                </label>
                
            </form>
        </header>
    )
}