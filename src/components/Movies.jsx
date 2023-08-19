
import { Movie } from "./movie"

export function Movies ({mappedMovies}){
  
    return (
        <main>
        {
          mappedMovies.map((movie,index) => {
            return(
              <Movie index={index} key={movie.id}  movie={movie}/>
            )
          })
        }
      </main>
    )
}