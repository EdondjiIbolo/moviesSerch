/* eslint-disable react/prop-types */
import './movie.css'
export function Movie ({movie , index}){
    return(
            <article className='movie' style={{animation:`movie ${index+3}50ms ease-in 50ms `}}>

              <picture>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.img}`} alt={movie.id} />
              </picture>
              <p>
                <strong>Titulo : {movie.title} </strong>
              </p>
              <p>
                <strong>Idioma : {movie.lang}</strong>
              </p>
              <p>Fecha de estreno :{movie.date} </p>
            </article>
          )
}