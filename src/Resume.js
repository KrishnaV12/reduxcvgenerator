import React from 'react';
import react from './assets/icons/react.svg'
import python from './assets/icons/python.svg'
import repair from './assets/icons/repair.svg'
import css from './assets/icons/css.svg'
import html from './assets/icons/html.png'
import github from './assets/icons/github.svg'
import "./resume.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Skills from './Skills';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import sidebar from './Sidebar';
import { useSelector } from 'react-redux';


const technicalSkill = [
    {
        icon: react,
        name: 'Python Programming',
        level: '60'
    },
    {
        icon: react,
        name: 'React.JS',
        level: '60'
    },
    {
        icon: react,
        name: 'HTML',
        level: '60'
    },
    {
        icon: react,
        name: 'CSS',
        level: '60'
    },
    {
        icon: react,
        name: 'MySQL',
        level: '60'
    },
    {
        icon: react,
        name: 'GITHUB',
        level: '60'
    }
]

const nonTechnicalSkills = [
    {
        icon: react,
        name: 'Project Management',
        level: '100'
    },
    {
        icon: react,
        name: 'Strong decision maker ',
        level: '100'
    },
    {
        icon: react,
        name: 'Complex problem solver ',
        level: '100'
    },
    {
        icon: react,
        name: 'Creative design  ',
        level: '100'
    },
    {
        icon: react,
        name: 'Service-focused  ',
        level: '100'
    },
    {
        icon: react,
        name: 'Innovative  ',
        level: '100'
    },

]


const certi = [
    {
        icon: react,
        name: 'Boostrap Framework (2020-2021)',
        level: '217'
    },
    {
        icon: react,
        name: 'Python programming (2019-2020)',
        level: '217'
    },
    {
        icon: react,
        name: 'Cyber Security & Internet Of Things (2019-2020)   ',
        level: '217'
    },
   
]

const languages = [
    {
        icon: react,
        name: 'HINDI : Full Professional Proficiency ',
        level: '100'
    },
    {
        icon: react,
        name: 'ENGLISH : Professional Working Proficiency  ',
        level: '100'
    },
]


const hobbys = [
    {
        icon: react,
        name: 'Bike Riding & Travelling  ',
        level: '60'
    },
  
    {
        icon: react,
        name: 'Decorations & Painting',
        level: '60'
    },
   
   

]

const Resume = () => {

    const user = useSelector((state) => {
        return state.user;
    });
    
   

    return (
        
        <div className="container resume">
            <div className="row">
                <div className="col-lg-6 resume-card" >
               
                    <h3 className="resume-card__heading ">
                    {user.btech}
                    </h3>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            {user.course}
                        </h5>
                        <p className="resume-card__name">
                        {user.university}
                        <h3 className="resume-card__name">{user.place}</h3>
                        </p>
                        
                        
                    </div>
                    <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading ">
                        {user.highboard}
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                        {user.coursehigh}
                        
                        </h5>
                        <p className="resume-card__name">
                        {user.college}
                        <h3 className="resume-card__name">{user.colplace}</h3>
                        </p>
                    </div>
                    </div>
                    
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading ">
                        {user.diploma}
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                        {user.dipcour}
                        
                        </h5>
                        <p className="resume-card__name">
                        {user.universitydip}
                        
                        <h3 className="resume-card__name">{user.palcedip}</h3></p>
                    </div>

                    <div className="col-lg-6 resume-card " >
                    <h4 className="resume-card__heading ">
                        {user.schoolboard}
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                        {user.schoolcourse}
                        
                        </h5>
                        <p className="resume-card__name">
                        {user.school}
                        
                        <h3 className="resume-card__name">{user.schoolplace}</h3></p>
                    </div>
                    </div>
                    
                </div>



            
            <div className="row">
                <div className="col-lg-6 resume-languages mt-3">
                    <h5 className="resume-language__heading">
                    Technical Skills :
                    </h5>
                    <div className="resume-language__body mt-3">
                    <ol className = "bar bar__wrapper bar__name " >
          
                        <h3>{user.skill}</h3>
                        <h3>{user.skill1}</h3>
                        <h3>{user.skill2}</h3>
                        <h3>{user.skill3}</h3>
                        <h3>{user.skill4}</h3>
                        <h3>{user.skill5}</h3>
                    </ol>
                        
                    </div>
                </div>
                <div className="col-lg-6 resume-languages mt-3">
                    <h5 className="resume-language__heading">
                        Non-Technical Skills :
                    </h5>
                    <div className="resume-language__body mt-3">
                    <ol className = "bar bar__wrapper bar__name " >
          
          <h3>{user.nonskill}</h3>
          <h3>{user.nonskill1}</h3>
          <h3>{user.nonskill2}</h3>
          <h3>{user.nonskill3}</h3>
          <h3>{user.nonskill4}</h3>
          <h3>{user.nonskill5}</h3>
      </ol>
                    </div>
                </div>
                <div className="col-lg-6 resume-languages mt-3">
                    <h5 className="resume-language__heading">
                    Hobbys :
                    </h5>
                    <div className="resume-language__body mt-3">
                    <ol className = "bar bar__wrapper bar__name " >
          
          <h3>{user.hobby}</h3>
          <h3>{user.hobby1}</h3>
          <h3>{user.hobby2}</h3>
          <h3>{user.hobby3}</h3>
          <h3>{user.hobby4}</h3>
          <h3>{user.hobby5}</h3>
      </ol>
                    </div>
                </div>
                <div className="col-lg-6 resume-languages mt-3">
                    <h5 className="resume-language__heading">
                    Languages :
                    </h5>
                    <div className="resume-language__body mt-3">
                    <ol className = "bar bar__wrapper bar__name " >
          
          <h3>{user.lang}</h3>
          <h3>{user.lang1}</h3>
          <h3>{user.lang2}</h3>
          <h3>{user.lang3}</h3>
          <h3>{user.lang4}</h3>
          <h3>{user.lang5}</h3>
      </ol>
                    </div>
                </div>
                 <div className="col-lg-6 resume-languages mt-3">
                    <h5 className="resume-language__heading">
                    Certifications :
                    </h5>
                    <div className="resume-language__body mt-3">
                    <ol className = "bar bar__wrapper bar__name " >
          
          <h3>{user.certi}</h3>
          <h3>{user.certi1}</h3>
          
      </ol>
                        
                    </div>
                </div>
            </div>
            </div>

            
            <Link to="/">Go Back</Link>
        </div>
     
    );
};

export default Resume;