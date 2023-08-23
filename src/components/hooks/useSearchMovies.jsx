import { useState , useEffect } from "react"
export const useSearchmovie = (movies , setMovies )=>{
    const [searchMovie , setSearchMovie] = useState(movies)
    const [search , setSearch] =useState(false)

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

        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[search])

    return {search , setSearch , setSearchMovie , searchMovie }
        
}
