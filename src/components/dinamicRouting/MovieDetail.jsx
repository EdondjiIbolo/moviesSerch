import { useParams , Link } from 'react-router-dom'
import React from 'react'
import './details.css'
import { useEffect, useState } from 'react'

 
 function MovieDetail (){
    const {id} = useParams()
    
    const apikey = 'fbd037a93d5372afc504eab573259665'
    // https://api.themoviedb.org/3/movie/976573?&append_to_response=videos&api_key=fbd037a93d5372afc504eab573259665
    const useMovieDetail = ({id})=>{
        const [movie , setMovie] = useState({})
        
       
        useEffect(()=>{
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=fbd037a93d5372afc504eab573259665`)
            .then( res=>{
                if(res.ok){
                  return  res.json()
                }
                else{
                    throw new Error('Error en la peticion : Pelicula no encontrada')
                }
            })
            .then(data=>setMovie(data))

        },[id])

        return { movie}
    }

    const { movie }=useMovieDetail({id})
    const {original_title:titulo ,
        poster_path:pathImg , 
        overview:sinopsis , 
        production_companies:productoras,
        release_date:fecha ,
        spoken_languages:idiomas,
        vote_average:votos,
        genres:generos,
        tagline:subtitulo
    } = movie
    

    const GetGenero = ({generos}) =>{

        if (!generos || generos.length === 0) {
            return null; // O puedes devolver algún elemento o mensaje alternativo
          }

        return(
            <ul className='productora'>{
                 generos.map((genero , index)=>{
                    return(
                        <li key={index}>{genero?.name}</li>
                    )
                })}
            </ul>
               
        )
    }
    const GetProductora = ({productoras}) =>{
        if (!productoras || productoras.length === 0) {
            return null; // O puedes devolver algún elemento o mensaje alternativo
          }
        return(
            <ul className='productora'>{
                productoras.map((productora , index)=>{
                    return(
                        <li key={index} className='pro'>{productora.name}</li>
                    )
                })}
            </ul>
               
        )
    }
    const Getidioma = ({idiomas}) =>{
        if (!idiomas || idiomas.length === 0) {
            return null; // O puedes devolver algún elemento o mensaje alternativo
          }
        return(
            <ul className='productora'>{
                idiomas.map((idioma , index)=>{
                    return(
                        <li key={index}>{idioma.name}</li>
                    )
                })}
            </ul>
               
        )
    }

    return(
        <main className='main-container'>
            <header className='header'>
                <Link to='/'>
                    <div className='header-div'> 
                        <i className="fa-solid fa-arrow-left-long"></i>
                    </div>
                </Link>
            </header>
            <main className='detail'>
            <picture>
                <img src={`https://image.tmdb.org/t/p/w500/${pathImg}`} alt={titulo} />
            </picture>
            <article>
                <section>
                    <div>
                        <strong>{titulo} </strong>
                        <p>Votos: {votos}</p>
                    </div>
                    <div>
                        <p>Año de salida :{fecha} </p> 
                    </div>
                    <div className='production'>
                        <p>Género:</p> <GetGenero generos={generos}/> 
                    </div>
                </section>
                <div className='production'>
                <p>Idioma :</p><Getidioma idiomas={idiomas}/>
                </div>
                <p className='subtitulo'>{subtitulo}</p>
                <p className='sinopsis'>Sinopsis : {sinopsis}</p>
                <div className='production'>
                    <p>Productora :</p>
                    <GetProductora productoras={productoras}/>
                </div>
            </article>
            </main>
        </main>
        
    )
}

export default MovieDetail