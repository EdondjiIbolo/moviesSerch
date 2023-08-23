import { useMovies } from './components/hooks/useMovies'
import { Header } from './components/Header'
import { NomovieResult } from './components/NomovieResult'
import './App.css'
import { Footer } from './components/Footer'
import { Movies } from './components/Movies'
import { useState } from 'react'




function App() {
 const [ enableFooter , setEnableFooter] = useState(true)
 const {setPagina , pagina , movies , setMovies} = useMovies()
 const mappedMovies = movies.map(
  movie =>({
     id :movie.id,
     title:movie.title,
     lang :movie.original_language,
     img :movie.poster_path,
     date :movie.release_date
  })
)
  return (
    <main className='main-app'>
      <Header setMovies={setMovies} movies={movies}  setEnableFooter={setEnableFooter}/>
      {
        mappedMovies &&
        <section>
          <Movies mappedMovies={mappedMovies} />
          {
            mappedMovies ?  '' :<NomovieResult/> 
          }   
        </section>
      }
      {
        enableFooter == true &&  <Footer changePage={setPagina} pagina={pagina} />
      }
      
    </main>
  )
}

export default App
