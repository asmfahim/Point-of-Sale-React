import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './assets/css/myStyle.css'
import {RouterProvider} from "react-router-dom";
import ProjectRouter from "./components/router/ProjectRouter";
import {useEffect, useState} from "react";
import axios from "./AxiosInterceptor";
import PublicRouter from "./components/router/PublicRouter";




function App() {

    const [auth,setAuth] = useState( false);

    useEffect(()=>{
        if(localStorage.token != undefined){
            setAuth(true)
            // axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
        }
    }, [])


  return (
    <>
        {auth ?
        <RouterProvider router={ProjectRouter} /> :
            <RouterProvider router={PublicRouter} />
        }
    </>
  );
}

export default App;
