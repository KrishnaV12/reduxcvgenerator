import React, { useState , useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUserAction } from "./Actions/userAction";
import "./form.css";

const FormComponent = (props) => {
  const [loading , setLoading] = useState("false");
  const [image , setImage] = useState("");
  const [name , setName] = useState("");
  const [surname , setSurname] = useState("");
  const [position , setPosition] = useState("");
  const [facebook , setFacebook] = useState("");
  const [insta , setInsta] = useState("");
  const [linkedin , setLinkedin] = useState("");
  const [git , setGit] = useState("");
  const [location , setLocation] = useState("");
  const [mail , setMail] = useState("");
  const [phone , setphone] = useState("");
  const [date , setDate] = useState("");

  // ...........................................................................................//
  const [btech , setBtech] = useState("");
  const [course , setCourse] = useState("");
  const [university , setUniversity] = useState("");
  const [place , setPlace] = useState("");

  const [diploma , setDiploma] = useState("");
  const [dipcour , setdipcour] = useState("");
  const [universitydip , setUniversitydip] = useState("");
  const [placedip , setPlacedip] = useState("");


  const [highbord , setHighbord] = useState("");
  const [coursehigh , setCoursehigh] = useState("");
  const [college , setCollege] = useState("");
  const [colplace , setColplace] = useState("");

  const [schoolbord , setSchoolbord] = useState("");
  const [schoolcourse , setSchoolcourse] = useState("");
  const [school , setSchool] = useState("");
  const [schoolplace , setSchoolplace] = useState("");

// ...............................................................................................//
  const [skill , setSkill] = useState("");
  const [skill1 , setSkill1] = useState("");
  const [skill2 , setSkill2] = useState("");
  const [skill3 , setSkill3] = useState("");
  const [skill4 , setSkill4] = useState("");
  const [skill5 , setSkill5] = useState("");

  const [nonskill , setNonskill] = useState("");
  const [nonskill1 , setNonskill1] = useState("");
  const [nonskill2 , setNonskill2] = useState("");
  const [nonskill3 , setNonskill3] = useState("");
  const [nonskill4 , setNonskill4] = useState("");
  const [nonskill5 , setNonskill5] = useState("");
  

  const [hobby , setHobby] = useState("");
  const [hobby1 , setHobby1] = useState("");
  const [hobby2 , setHobby2] = useState("");
  const [hobby3 , setHobby3] = useState("");
  

  const [lang , setLang] = useState("");
  const [lang1 , setLang1] = useState("");
  const [lang2 , setLang2] = useState("");
  const [lang3 , setLang3] = useState("");


  const [certi , setCerti] = useState("");
  const [certi1 , setCerti1] = useState("");


  const dispatch = useDispatch();

  
  const uploadImage = async e=>{
    const files = e.target.files
    const data = new FormData()
    data.append('file' , files[0])
    data.append('upload_preset' , 'vgjcfeiu')
    setLoading(true)

    const res = await fetch("	https://api.cloudinary.com/v1_1/krishnav12/image/upload ",
    {
      method:'POST',
      body:data
    })
    const file = await res.json()
    console.log(file)

    setImage(file.secure_url)
    setLoading(false)
  }





  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      image:image,
      name:name,
      surname:surname,
      position:position,
      facebook:facebook,
      insta:insta,
      linkedin:linkedin,
      git:git,
      location:location,
      mail:mail,
      phone:phone,
      date:date,

      // ..................................................................................//
      btech:btech,
      course:course,
      university:university,
      place:place,

      diploma:diploma,
      dipcour:dipcour,
      universitydip:universitydip,
      placedip:placedip,


      highbord:highbord,
      coursehigh:coursehigh,
      college:college,
      colplace:colplace,

      schoolbord:schoolbord,
      schoolcourse:schoolcourse,
      school:school,
      schoolplace:schoolplace,

      //.......................................................//
      skill:skill,
      skill1:skill1,
      skill2:skill2,
      skill3:skill3,
      skill4:skill4,
      skill5:skill5,

      nonskill:nonskill,
      nonskill1:nonskill1,
      nonskill2:nonskill2,
      nonskill3:nonskill3,
      nonskill4:nonskill4,
      nonskill5:nonskill5,

      hobby:hobby,
      hobby1:hobby1,
      hobby2:hobby2,
      hobby3:hobby3,

      lang:lang,
      lang1:lang1,
      lang2:lang2,
      lang3:lang3,

      certi:certi,
      certi1:certi1
    
    
    
    
    };



    const moveforwardData = () => {
      props.history.push("/usersDetails");
      props.history.push("/Sidebar");
      props.history.push("/Resume");

    };

    dispatch(addUserAction(formData, moveforwardData));
  };

  //   const fileSelectedHandler = event =>{
  //    console.log(event.target.files[0]);
  //  }

  // const fileUploadHandler = () =>{
  //     this.setState({
  //       selectedFile:event.target.files[0]
  //     })
  //  }

 


  return (
    <div className = "container">
    <h1 className = "header">⚙ RESUME GENERATOR ⚙ </h1>

    <form className = "form" onSubmit={(e) => handleSubmit(e)}>
  {/* ............................................................... */}
        <div className= "info">
        <h2>About 🕵️‍♂️</h2>

        {/* <input className = "text__area" 
        type="file" 
        placeholder = "Upload"
        name = "name" 
        //value={profile}
        onChange={this.fileSelectedHandler}/>

       <button onClick={this.fileUploadHandler}>Upload!</button> */}
                  
                

        <input className = "text__area" 
        type="text" 
        placeholder = "Name"
        name = "name" 
        value={name}
        onChange={(e)=> {setName(e.target.value)}}/>

        <input className = "text__area" 
        type="text" 
        placeholder = "Surname"
        name = "surname" 
        value={surname}
        onChange={(e)=> {setSurname(e.target.value)}}/>

       <input className = "text__area" 
        type="text" 
        placeholder = "Position"
        name = "Position" 
        value={position}
        onChange={(e)=> {setPosition(e.target.value)}}/>

        <input className = "text__area" 
        type="url" 
        placeholder = "Facebook link"
        name = "Facebook" 
        value={facebook}
        onChange={(e)=> {setFacebook(e.target.value)}}/>

       <input className = "text__area" 
        type="url" 
        placeholder = "Insta link"
        name = "Insta" 
        value={insta}
        onChange={(e)=> {setInsta(e.target.value)}}/>


       <input className = "text__area" 
        type="url" 
        placeholder = "LinkedIn link"
        name = "LinkedIn" 
        value={linkedin}
        onChange={(e)=> {setLinkedin(e.target.value)}}/>

       <input className = "text__area" 
        type="text" 
        placeholder = "Github link"
        name = "Github" 
        value={git}
        onChange={(e)=> {setGit(e.target.value)}}/>

       <input className = "text__area" 
        type="text" 
        placeholder = "Location"
        name = "Location" 
        value={location}
        onChange={(e)=> {setLocation(e.target.value)}}/>
        

        <input className = "text__area" 
        type="mail" 
        placeholder = "Mail Id"
        name = "Mail" 
        value={mail}
        onChange={(e)=> {setMail(e.target.value)}}/>


       <input className = "text__area" 
        type="tel" 
        placeholder = "Contact"
        name = "tel" 
        value={phone}
        onChange={(e)=> {setphone(e.target.value)}}/>

        <input className = "text__area" 
        type="date" 
        placeholder = "DOB"
        name = "date" 
        value={date}
        onChange={(e)=> {setDate(e.target.value)}}/>
        </div>
{/* 
        ...................................................................................... */}
       
        <div className= "edu">
        <h1>Graduation 👨‍🎓</h1>
        <h2>Degree</h2>
        <input className = "text__area" 
        type="text" 
        placeholder = "Degree"
        name = "degree" 
        value={btech}
        onChange={(e)=> {setBtech(e.target.value)}}/>

        <input className = "text__area" 
        type="text" 
        placeholder = "Course"
        name = "course" 
        value={course}
        onChange={(e)=> {setCourse(e.target.value)}}/>

        
        <input className = "text__area" 
        type="text" 
        placeholder = "Universesity"
        name = "universcity" 
        value={university}
        onChange={(e)=> {setUniversity(e.target.value)}}/>

    
        <input className = "text__area" 
        type="text" 
        placeholder = "Place"
        name = "place" 
        value={place}
        onChange={(e)=> {setPlace(e.target.value)}}/>




<h2>Diploma</h2>
        <input className = "text__area" 
        type="text" 
        placeholder = "Diploma"
        name = "diploma" 
        value={diploma}
        onChange={(e)=> {setDiploma(e.target.value)}}/>

        <input className = "text__area" 
        type="text" 
        placeholder = "Course"
        name = "dipcourse" 
        value={dipcour}
        onChange={(e)=> {setdipcour(e.target.value)}}/>

        
        <input className = "text__area" 
        type="text" 
        placeholder = "University"
        name = "university" 
        value={universitydip}
        onChange={(e)=> {setUniversitydip(e.target.value)}}/>

    
        <input className = "text__area" 
        type="text" 
        placeholder = "Place"
        name = "place" 
        value={placedip}
        onChange={(e)=> {setPlacedip(e.target.value)}}/></div>



<div className = "edu2">
<h1>Educaton 👨‍🏫</h1>
<h2>College</h2>
        <input className = "text__area" 
        type="text" 
        placeholder = "12th"
        name = "highboard" 
        value={highbord}
        onChange={(e)=> {setHighbord(e.target.value)}}/>

        <input className = "text__area" 
        type="text" 
        placeholder = "Course"
        name = "couursehigh" 
        value={coursehigh}
        onChange={(e)=> {setCoursehigh(e.target.value)}}/>

        
        <input className = "text__area" 
        type="text" 
        placeholder = "College"
        name = "college" 
        value={college}
        onChange={(e)=> {setCollege(e.target.value)}}/>

    
        <input className = "text__area" 
        type="text" 
        placeholder = "Place"
        name = "colplace" 
        value={colplace}
        onChange={(e)=> {setColplace(e.target.value)}}/>




<h2>School</h2>

        <input className = "text__area" 
        type="text" 
        placeholder = "School"
        name = "school" 
        value={schoolbord}
        onChange={(e)=> {setSchoolbord(e.target.value)}}/>

        <input className = "text__area" 
        type="text" 
        placeholder = "Course"
        name = "schoolcourse" 
        value={schoolcourse}
        onChange={(e)=> {setSchoolcourse(e.target.value)}}/>

        <input className = "text__area" 
        type="text" 
        placeholder = "School"
        name = "school" 
        value={school}
        onChange={(e)=> {setSchool(e.target.value)}}/>

        <input className = "text__area" 
        type="text" 
        placeholder = "Place"
        name = "schoolpace" 
        value={schoolplace}
        onChange={(e)=> {setSchoolplace(e.target.value)}}/>
        </div>

{/* //.......................................................................// */}
        <div className="skill">
        <h1>Tech Skills 👨‍🔧</h1>
        <input className = "text__area" 
        type="text" 
        placeholder = "Skill #1"
        name = "skill" 
        value={skill}
        onChange={(e)=> {setSkill(e.target.value)}}/>

        <input className = "text__area" 
        type="text" 
        placeholder = "Skill #2"
        name = "skill" 
        value={skill1}
        onChange={(e)=> {setSkill1(e.target.value)}}/>

        <input className = "text__area" 
        type="text" 
        placeholder = "Skill #3"
        name = "skill" 
        value={skill2}
        onChange={(e)=> {setSkill2(e.target.value)}}/>

        <input className = "text__area" 
        type="text" 
        placeholder = "Skill #4"
        name = "skill" 
        value={skill3}
        onChange={(e)=> {setSkill3(e.target.value)}}/>

        <input className = "text__area" 
        type="text" 
        placeholder = "Skill #5"
        name = "skill" 
        value={skill4}
        onChange={(e)=> {setSkill4(e.target.value)}}/>

        <input className = "text__area" 
        type="text" 
        placeholder = "Skill #6"
        name = "skill" 
        value={skill5}
        onChange={(e)=> {setSkill5(e.target.value)}}/>
        </div>



        <div className = "softskill">
        <h1>Soft Skills 👩‍🎨</h1>
        <input className = "text__area" 
        type="text" 
        placeholder = "Soft Skill  #1"
        name = "nonskill" 
        value={nonskill}
        onChange={(e)=> {setNonskill(e.target.value)}}/>

        <input className = "text__area" 
        type="text" 
        placeholder = "Soft Skill #2"
        name = "nonskill" 
        value={nonskill1}
        onChange={(e)=> {setNonskill1(e.target.value)}}/>

        <input className = "text__area" 
        type="text" 
        placeholder = "Soft Skill #3"
        name = "nonskill" 
        value={nonskill2}
        onChange={(e)=> {setNonskill2(e.target.value)}}/>

        <input className = "text__area" 
        type="text" 
        placeholder = "Soft Skill #4"
        name = "nonskill" 
        value={nonskill3}
        onChange={(e)=> {setNonskill3(e.target.value)}}/>

        <input className = "text__area" 
        type="text" 
        placeholder = "Soft Skill #5"
        name = "nonskill" 
        value={nonskill4}
        onChange={(e)=> {setNonskill4(e.target.value)}}/>

        <input className = "text__area" 
        type="text" 
        placeholder = "Soft Skill #6"
        name = "nonskill" 
        value={nonskill5}
        onChange={(e)=> {setNonskill5(e.target.value)}}/>
      </div>





      
      <div className = "hobby">
      <h1>Hobbys 🏌️‍♀️</h1>
        <input className = "text__area" 
        type="text" 
        placeholder = "Hobbys #1"
        name = "hobby" 
        value={hobby}
        onChange={(e)=> {setHobby(e.target.value)}}/>

        <input className = "text__area" 
        type="text" 
        placeholder = "Hobbys #2"
        name = "hobby" 
        value={hobby1}
        onChange={(e)=> {setHobby1(e.target.value)}}/>

        <input className = "text__area" 
        type="text" 
        placeholder = "Hobbys #3"
        name = "hobby" 
        value={hobby2}
        onChange={(e)=> {setHobby2(e.target.value)}}/>

        <input className = "text__area" 
        type="text" 
        placeholder = "Hobbys #4"
        name = "hobby" 
        value={hobby3}
        onChange={(e)=> {setHobby3(e.target.value)}}/>
      </div>




     
      <div className = "lang">
      <h1>Language 🧏‍♀️</h1>
      <input className = "text__area" 
        type="text" 
        placeholder = "Language #1"
        name = "lang" 
        value={lang}
        onChange={(e)=> {setLang(e.target.value)}}/>

        <input className = "text__area" 
        type="text" 
        placeholder = "Language #2"
        name = "lang" 
        value={lang1}
        onChange={(e)=> {setLang1(e.target.value)}}/>

        <input className = "text__area" 
        type="text" 
        placeholder = "Language #3"
        name = "lang" 
        value={lang2}
        onChange={(e)=> {setLang2(e.target.value)}}/>

        <input className = "text__area" 
        type="text" 
        placeholder = "Language #4"
        name = "lang" 
        value={lang3}
        onChange={(e)=> {setLang3(e.target.value)}}/>

       





      </div>  


      <div className="certi">
      <h1>Certification 🥇</h1>
        <input className = "text__area" 
        type="text" 
        placeholder = "Certificate #1"
        name = "certi" 
        value={certi}
        onChange={(e)=> {setCerti(e.target.value)}}/>

        <input className = "text__area" 
        type="text" 
        placeholder = "Certificate #2"
        name = "certi" 
        value={certi1}
        onChange={(e)=> {setCerti1(e.target.value)}}/>
        </div>


      <div className = "profile">
      <h2>Profile Pic 📷</h2>
      <input className = "text__area" 
        type="file" 
        
        name = "file" 
        
        onChange= {uploadImage}/>
        {
          loading?(<h3>Loading...</h3>):(
            <img src={image} style={{width:'50px'}}/>
          )
        }
      </div>
  
        
        
        
        
        
        
        
        <div className = "button">
        
        <input className="btn" type="submit" value="Generate" />
        </div>
          
      </form>
    </div>
  );
};
export default withRouter(FormComponent);
