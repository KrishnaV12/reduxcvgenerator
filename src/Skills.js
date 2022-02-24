import React from 'react';
import "./resume.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from 'react-redux';



const Skills = ({ value: { icon, name,skill, level } }) => {
    const bar_width = `${level}%`
   
    const user = useSelector((state) => {
        return state.user;
    });
    
    
    return (

       
        <div className="bar">
            <div className="bar__wrapper" style={{
                'width': bar_width
            }}>
                <span className="bar__name">
                    <img src={icon} alt="icon" className="bar__icon mr-4 m-lg-2"  />{user.skill}
                </span>
              

            </div>

        </div>
    );
};

export default Skills;