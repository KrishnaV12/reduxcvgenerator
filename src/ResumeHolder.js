import react from "react";
import "./index.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Sidebar";
import "./sidebar.css";
import Pdf from "react-to-pdf";

import { BrowserRouter,Route,Link, Redirect, Switch } from "react-router-dom";

import Resume from "./Resume"
import React from "react";


const ResumeHolder=()=>{
  const ref = React.createRef();

    return(
        <>
        <div ref={ref}>
        <div className="App">
         <div className="container">
          <div className="row">
           <div className="col-lg-3" >
            <Sidebar/>
            
          </div>
          <div className="col-lg-9 main_portion">
          
          <Resume/>
      
          </div>
        </div>
        </div>
        </div>
        <div className="pdf" position="centre">
        <Pdf targetRef={ref} filename="yourResume.pdf">
        {({ toPdf }) => <button  className= "button"  onClick={toPdf}>Download Resume in PDF</button>}
      </Pdf>


        </div>
        </div>
        
     
       
        </>
    )

}

export default ResumeHolder;