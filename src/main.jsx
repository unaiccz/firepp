import React from 'react'
import ReactDOM from 'react-dom/client'
import { rut} from './routers/Rrouter'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    //<RouterProvider router={rut}/>
  </React.StrictMode>,
)
