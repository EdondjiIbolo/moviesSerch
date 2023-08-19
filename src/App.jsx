import { useMovies } from './components/hooks/useMovies'
import { Header } from './components/Header'
import './App.css'
import { Footer } from './components/Footer'
import { Movies } from './components/Movies'



function App() {
 
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
    <>
      <Header setMovies={setMovies} />
      {
        mappedMovies.length>0 ?
        <section>
          <Movies mappedMovies={mappedMovies} />
          <Footer changePage={setPagina} pagina={pagina} />
        </section>
        :
        <section style={{textAlign:'center'}}>
          <h3>No se han podido encontrar peliculas con este nombre</h3>
        </section>
      }
      
    </>
  )
}

export default App
