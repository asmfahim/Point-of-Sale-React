import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './assets/css/myStyle.css'
import {RouterProvider} from "react-router-dom";
import ProjectRouter from "./components/router/ProjectRouter";
import {useState} from "react";
import publicRouter from "./components/router/PublicRouter";


function App() {
    const [auth,setAuth] = useState( false);

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
