import React, { useState } from "react";
import {Link,useNavigate} from 'react-router-dom'
import './Login.css'
function Login(){

  const [cli,setCli]=useState(true);
  const navigate=useNavigate();
  const handleC=()=>{
    console.log("login first")
  }

    return(
    
    <div className="welcome-container">
      <h1>Welcome to Easy Cheque Printing Software</h1>
      <br></br>
    
      <br></br>
     <Link to="/LoginA"><button className="get-started-button" onClick={handleC}>Login</button></Link>


    </div>
        
    );
}
export default Login