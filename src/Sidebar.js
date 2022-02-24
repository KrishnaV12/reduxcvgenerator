import react from "react";
import facebook from "./assets/icons/facebook.svg";
import instagram from "./assets/icons/instagram.svg";
import github from "./assets/icons/github.svg";
import mail from "./assets/icons/mail.png";
import dob from "./assets/icons/dob.png";
import mobile from "./assets/icons/github.svg";
import location from "./assets/icons/location.png";
import tie from "./assets/icons/tie.png";
import linkedin from "./assets/icons/linkedin.svg";
import profile from "./assets/image/profile.jpg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


import "./sidebar.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import resume from "./assets/resume.pdf";
import { useSelector } from "react-redux";






const Sidebar =()=>{
    const user = useSelector((state) => {
        return state.user;
    });
   

    




    return(
        <>
        <div className="sidebar">
            <img src={user.image} alt="avatar" className="sidebar_avatar"/>
           
       
            <div className="sidebar_name">{user.name} <span>{user.surname}</span></div>
            <div className="sidebar_item sidebar_title">{user.position}</div>
            
            
            <a href={resume} download="resume.pdf">
                <div className="sidebar_item sidebar_resume">
                    <img src={tie} alt="resume" className="sidebar_icon" />Download Resume
                
            
                </div>
            </a>
            
            
            
            <div className="sidebar_social-icon my-2 ">
                <a href={user.facebook}><img src={facebook} alt="facebook" className="sidebar_icon my-3"/></a>
                <a href={user.insta}><img src={instagram} alt="instagram" className="sidebar_icon"/></a>
                <a href={user.linkedin}><img src={linkedin} alt="linkedin" className="sidebar_icon"/></a>
               
            </div>
            
            
            
            <div className="contact">
                <div className="sidebar_item sidebar_github">
                    <a href={user.git}><img src={github} alt="github" className="sidebar_icon" /></a>
                </div>
            
            
                <div className="sidebar_location">
                    <img src={location} alt="location" className="sidebar_icon aling=center"/>{user.location}
                </div>
            
                <div className="sidebar_item">
                <img src={mail} alt="mail" className="sidebar_icon aling=center"/>{user.mail}</div>
                <div className="sidebar_item">
                <img src={mobile} alt="mobile" className="sidebar_icon aling=center"/>{user.phone}</div>
                <div className="sidebar_item">
                <img src={dob} alt="dob" className="sidebar_icon aling=center"/>{user.data}</div>

            </div>
            </div>
           

        </>


    );
};

export default Sidebar;