import React, { useState } from "react";
import LoginForm from "./components/LoginForm";  /* the login form is on the javascript, when you input a wrong email or password the if staement will work. when you input wrong email or password the details do not match will pop up to oyur screen.*/
import picture from './tuts.jpg';

function App() {
  const adminUser = { // the constant adminUser will used if else, if the email and pass will match the login form will works.  
    //based on what we set on the adminUser.

    
            // this is the email of the login form, this email need a '@' symbol//
    email:"tutcastasus@gmail.com", 
            

            // this is the password of the login form//
    password: "acere14."  
    
  }

  const [user, setUser] = useState({email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email === adminUser.email && details.password === adminUser.password){ 
      // this is the if else statement when you input the correct email and password you will entered the login form. //
      console.log("Logged In");
      setUser({
        email: details.email
      });
    } else {  //when you input the incorrect email or password you will not entered to the login form and the detail do not match will pop up to your screen. //
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  }

  const Logout = () => {
    setUser({email: ""});
  }

  return (
    <div className="App">
      {(user.email !== "") ? ( 
      // this is the main page of the login form.//
      

        <div className="logged-in"> 
          <img src={picture} className="picture" alt="picture" />;
          <h2>Name: Nathaniel Abram M. Castasus </h2>
          <h2>Course & Section: BSIT32-E2</h2>
          <h2>Hobbies: <a href="https://www.youtube.com/channel/UCDNlmG6CHlk7ICvSD8KDZQg"><span> watching bike blogs</span></a>
          , <a href="https://www.strava.com/dashboard#_=_"><span> tracking human exercise </span></a>,  
          <a href="https://m.mobilelegends.com/en"><span> playing mobile games </span></a></h2>
          <button onClick={Logout}>Logout</button>
          </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;
