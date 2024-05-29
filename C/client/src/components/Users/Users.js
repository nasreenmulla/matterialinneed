import React from "react";
import axios from 'axios'
import './Users.css'
import { useEffect,useState } from "react";
axios.defaults.baseURL="http://localhost:8080/"
function Users(){
  const [users, setUsers] = useState([]);


  
  const getFetchData=async()=>{
    const data=await axios.get("/users")
    console.log(data)
    if(data.data.success){
      setUsers(data.data.data)
     
    }
  }
  useEffect(()=>{
  getFetchData()
  },[])

  

  // useEffect(() => {
  //   // Fetch user data from backend when component mounts
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await axios.get('/users'); // Fetch users from backend API
  //       setUsers(response.data); // Set users state with fetched data
  //     } catch (error) {
  //       console.error('Error fetching users:', error);
  //     }
  //   };

  //   fetchUsers();
  // }, []);
    return(
        <div>
          <div className="user-list-container">
      <h2 className="user-list-header">User List</h2>
      <ul className="user-list">
        {users && users.length > 0 ? (
          users.map(user => (
            <li className="user-list-item" key={user._id}>
              <div className="user-name">{user.username}</div>
              <div className="user-email">{user.email}</div>
            </li>
          ))
        ) : (
          <li className="user-list-item">No users found</li>
        )}
      </ul>
    </div>
            
             
        </div>
    )
}
export default Users;