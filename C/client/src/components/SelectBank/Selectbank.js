import React from "react";
import axios from 'axios'
import './Selectbank.css'

import { useEffect,useState,useNavigate } from "react";
import Fill from "./Fill";
axios.defaults.baseURL="http://localhost:8080/"
function Selectbank({onBankSelect}){
  const [bank, setBank] = useState([]);
 
  // const getFetchData=async()=>{
  //   const data=await axios.get("/banks")
  //   console.log(data)
  //   if(data.data.success){
  //     setBank(data.data.data)
     
  //   }
  // }
  // useEffect(()=>{
  //   getFetchData();
  // },[])
  const getFetchData = async () => {
    try {
      const data = await axios.get("/banks");
      console.log(data.data);
      if (data.data.success) {
        setBank(data.data.data);
      }
    } catch (error) {
      console.error('Error fetching banks data:', error);
    }
  };

  useEffect(() => {
    getFetchData();
  }, []);


  // useEffect(() => {
  //   // Assuming you have a function to fetch bank data from an API
  //   getFetchData().then((data) => {
  //     setBanks(data); // Assuming data is an array of bank names
  //   }).catch((error) => {
  //     console.error('Error fetching banks data:', error);
  //   });
  // }, []);

  const handleBankChange = (event) => {
    const selectedBank = event.target.value;
    onBankSelect(selectedBank); // Ensure onBankSelect is called as a function
  };


  
  // useEffect(()=>{
  // getFetchData()
  // },[])

  // const [showComponent, setShowComponent] = useState(false);

  // const handleClick = () => {
  //   setShowComponent(true);
  // };

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
      <div className="bank-selector-container">
      <label className="bank-selector-label">Selected Bank:</label>
      <select className="bank-selector-select" onChange={handleBankChange}>
        <option value="">Select a bank</option>
        {bank.map((ban, index) => (
          <option key={index} value={ban.bankname}>
            {ban.bankname}
          </option>
        ))}
      </select>
    </div>
    )
}
export default Selectbank;