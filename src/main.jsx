import React from 'react'
import ReactDOM from 'react-dom/client'
import { rut} from './routers/Rrouter'
import { RouterProvider } from 'react-router-dom'
import UserProvider from './context/UserContext'

ReactDOM.createRoot(document.getElementById('root')).render(
<UserProvider>
<React.StrictMode>
    //<RouterProvider router={rut}/>
  </React.StrictMode>
</UserProvider>
)
