import React from "react";
import ReactDom from "react-dom/client" ;
import {BrowserRouter} from "react-router-dom"
import App from  "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css"
import "@fontsource/poppins"


ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </React.StrictMode>
);