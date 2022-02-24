import react from "react";
import "./index.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Sidebar";
import "./sidebar.css";

import { BrowserRouter,Route, Redirect, Switch, Link } from "react-router-dom";

import Resume from "./Resume"
import ResumeHolder from "./ResumeHolder";

import UserDetails from "./UserDetails";
import FormComponent from "./FormComponent";


const App=()=>{
    return(
        <>
         
      <BrowserRouter>
       
      <div className="App">
      <Route path="/Resume" component={ResumeHolder} exact /></div>
      <Switch>
      <div>
      
      <Route path="/" component={FormComponent} exact />
      </div>
      </Switch>
         
      </BrowserRouter>
     
    
        </>
    )

}

export default App;