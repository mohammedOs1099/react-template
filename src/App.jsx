
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/Portfolio/Portfolio";
import Layout from "./Components/Layout/Layout";
import React from "react";
import Notfound from "./Components/Notfound/Notfound";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";


let routes =  createBrowserRouter([
  { path:"",element: <Layout/>, children:[
   {index:true,element: <Home/>},
    {path:"about",element: <About/>},
    {path:"Portfolio",element: <Portfolio/>},
    {path:"contact",element: <Contact/>},
    {path:"*",element: <Notfound/>},

      ]
  }


]);




function App() {
  return ( 
    <>
   <RouterProvider router={routes} ></RouterProvider>

    </>
   );
}

export default App;