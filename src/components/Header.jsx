
import { useSearchmovie } from './hooks/useSearchMovies'
import './header.css'
export function Header({setMovies , movies ,setEnableFooter}){

    const { setSearchMovie ,search ,setSearch , searchMovie} = useSearchmovie(movies , setMovies )

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(searchMovie=='') return
        setSearch(!search)
        setEnableFooter(false)
    }
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