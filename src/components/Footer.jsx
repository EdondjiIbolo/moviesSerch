import './footer.css'
export function Footer({changePage , pagina}){

    const handleNextPage = (e)=>{
        e.preventDefault()
        changePage(pagina + 1)
    }
    const handlePrevtPage = (e)=>{
        e.preventDefault()
        changePage(pagina - 1)
    }
    return(
        <footer>
            {
            pagina >=2 && <a onClick={handlePrevtPage} href="#">Anterior </a>
            }
            
            <a href="#" onClick={handleNextPage}>Siguiente</a>    
        </footer>
        )

    }