import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './assets/css/myStyle.css'
import {RouterProvider} from "react-router-dom";
import ProjectRouter from "./components/router/ProjectRouter";
import {useEffect, useState} from "react";
import publicRouter from "./components/router/PublicRouter";
import axios from "axios";


function App() {

    const [auth,setAuth] = useState( false);

    useEffect(()=>{
        if(localStorage.token != undefined){
            setAuth(true)
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`
        }
    })


  return (
    <>
        {auth ?
        <RouterProvider router={ProjectRouter} /> :
            <RouterProvider router={publicRouter} />
        }
    </>
  );
}

export default App;
