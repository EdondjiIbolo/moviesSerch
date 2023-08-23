
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import { Rutas } from './components/Rutas.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      <Rutas />
    </BrowserRouter>
 
)
