
// import React, { useState } from 'react';
// import './Auth.css'
// import axios from 'axios';



// axios.defaults.baseURL="http://localhost:8080/"
//  function Auth ()  {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

//   const [form,setForm]=useState({
//     username: "",
//     password: "",
//   })

  // const handleUsernameChange = (event) => {
  //   setUsername(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

//  const handleonChange=(e)=>{
     
    
//     const {value,name}=e.target
//     setForm((preve)=>{
//       return{
//         ...preve,
//         [name]:value
//       }
//     })
//   }
//   const handleSubmit =async (event) => {
//     event.preventDefault();
//     const data=await axios.post("/createA",form)
//     if(data.data.success){
//       alert ("logged in successfully")
//       setForm({
//         username:"",
//         password:"",
        
//       })
//     }
//     console.log(form)
//   };

//   return (
//     <form >
//           <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//         //   onChange={handleonChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           name="username"
//         //   onChange={handleonChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//         //   onChange={handleonChange}
//           required
//         />
//       </div>
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Auth;



// LoginForm.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';
axios.defaults.baseURL="http://localhost:8080/"

function Auth () {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [email, setEmail] = useState('');
 const navigate=useNavigate()
  const [form,setForm]=useState({
    username:"",
    email:"",
    password:""
  })
  const handleonChange=(e)=>{
     
    
    const {value,name}=e.target
    setForm((preve)=>{
      return{
        ...preve,
        [name]:value
      }
    })
  }


  const handleSubmit =async (event) => {
    event.preventDefault();
    
    const data=await axios.post("/createL",form)
    console.log(data)
    if(data.data.success){
      alert ("logged in successfully")
      navigate("/home")
      setForm({
        username:"",
        email:"",
        password:"",
        
      })
    }
    console.log(form)
  };

  return (
    <div className="login-container">
      <form  className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            
            onChange={handleonChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            
            onChange={handleonChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
          
            onChange={handleonChange}
            required
          />
        </div>
      
        <button type="submit" onClick={handleSubmit}>Login</button>
        
      </form>
    </div>
  );
};

export default Auth;
