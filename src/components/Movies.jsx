
import { Movie } from "./movie"
export function Movies ({mappedMovies}){
  
    return (
      
        <ul className='movies'>
          {
            mappedMovies.map((movie,index) => {
              return(
                <li key={movie.id}>
                   <Movie index={index}   movie={movie}/>
                </li>
                 
              
              )
            })
          }
        </ul>
        
    )
}