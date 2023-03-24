import { createBrowserRouter } from "react-router-dom"
import Default from "../loayaut/Default"
import Home from "../pages/Home"
import Dashboard from "../pages/Dashboard"
import Register from "../pages/Register"

export const rut = createBrowserRouter([

{ path: "/",

element: <Default />,
children: [
{index: true,
element: <Home />},
{path:"/dashboard", element: <Dashboard />},
{path:"/register", element: <Register />},

] }




])