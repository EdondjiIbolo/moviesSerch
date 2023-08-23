/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import './movie.css'
export function Movie ({movie , index}){
  // animation = style={{animation:`movie ${index+3}50ms ease-in 50ms `}}cd 
    return(
            <article className='movie' >
                <Link to={`/${movie.id}`}>
                  <picture>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.img}`} alt={movie.id} />
                  </picture>
                  <section className='description'>
                    <p>
                      <strong>Titulo : {movie.title} </strong>
                    </p>
                    <p>
                      <strong>Idioma : {movie.lang}</strong>
                    </p>
                    <p>Fecha de estreno : {movie.date} </p>
                  </section>
                  
              </Link>
            </article>
          )
}