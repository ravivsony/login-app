
import React from "react";
import Routes from "./router";
import axios from "axios";
import {config} from "./utils/config"

axios.defaults.baseURL = config.API_URL

function App() {
  const auth = Boolean(localStorage.getItem("itemsJson"))

  
  return (
    <>
      
      
      <Routes isAuth={auth} />
    </>
  );
}

export default App;
