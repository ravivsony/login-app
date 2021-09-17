import "./App.css";
import React from "react";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/login";
import HomePage from "./pages";


function App() {
  const auth = Boolean(localStorage.getItem("itemsJson"))

  
  return (
    <>
      
      <Router>
        <Switch>
          <Route exact path="/" >
            <HomePage />
          </Route>
          <Route exact path="/login">
            {
              auth ?   <Login component /> : <Redirect path="/" />
             }
            
          
          </Route>
        </Switch>
      </Router>
      ;
    </>
  );
}

export default App;
