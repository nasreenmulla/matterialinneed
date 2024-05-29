
// import React, { useState } from 'react';
// // import './AddBank.css';
// import axios from 'axios';
// axios.defaults.baseURL="http://localhost:8080/"

// function AddBank() {
//   const [bankInfo, setBankInfo] = useState({
//     bankcode: '',
//     bankname: '',
//     accountnumber: ''
//   });

//   const [bankList, setBankList] = useState([]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setBankInfo(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     const data=await axios.post("/createB",bankInfo)
//     setBankList(prevList => [...prevList, bankInfo]);
//     setBankInfo({
//       bankcode: '',
//       bankname: '',
//       accountnumber: ''
//     });
//   };
// //   const handleADD=async(e)=>{
// //     e.preventDefault();
// //     const data=await axios.post("/create",formData)
// //     console.log(data)
// //     if(data.data.success){
// //      setAddSection(false)
// //      alert(data.data.message)
// //      getFetchData()
// //      setFormData({
// //        Bankcode:"",
// //        Bankname:"",
// //        Accountno:""
// //      })
// //     }
// // }


//   const handleEdit = (index) => {
//     const editedBankInfo = bankList[index];
//     setBankInfo(editedBankInfo);
//     setBankList(prevList => prevList.filter((_, i) => i !== index));
//   };

//   const handleDelete = (index) => {
//     setBankList(prevList => prevList.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="App">
//       <h1>Bank Information Form</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="bankcode" placeholder="Bank Code" value={bankInfo.bankcode} onChange={handleChange} required />
//         <input type="text" name="bankname" placeholder="Bank Name" value={bankInfo.bankname} onChange={handleChange} required />
//         <input type="text" name="accountnumber" placeholder="Account Number" value={bankInfo.accountnumber} onChange={handleChange} required />
//         <button type="submit">Add Bank</button>
//       </form>
//       <table>
//         <thead>
//           <tr>
//             <th>Bank Code</th>
//             <th>Bank Name</th>
//             <th>Account Number</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bankList.map((bank, index) => (
//             <tr key={index}>
//               <td>{bank.bankcode}</td>
//               <td>{bank.bankname}</td>
//               <td>{bank.accountnumber}</td>
//               <td>
//                 <button onClick={() => handleEdit(index)}>Edit</button>
//                 <button onClick={() => handleDelete(index)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default AddBank;



// import logo from './logo.svg';
import './AddBank.css';
import { useEffect, useState } from 'react';
import axios from "axios"
import Formtable from './Formtable';


axios.defaults.baseURL="http://localhost:8080/"

function AddBank() {

  const [addSection,setAddSection]=useState(false)
  const [editSection,setEditsection]=useState(false)


  const [formData,setFormData]=useState({
    
    bankname:"",
    bankcode:"",
    accountnumber:"",
  })
  const [formDataEdit,setFormDataEdit]=useState({
    bankname:"",
    bankcode:"",
    accountnumber:"",
    _id:""
  
  })

  const [dataList,setDataList]=useState([])

  const handleOnChange=(e)=>{
         const {value,name}=e.target
         setFormData((preve)=>{
          return {
            ...preve,
            [name]:value
          }
         })
  }

  const handleADD=async(e)=>{
       e.preventDefault();
       const data=await axios.post("/createB",formData)
       console.log(data)
       if(data.data.success){
        setAddSection(false)
        alert(data.data.message)
        getFetchData()
        setFormData({
          bankname:"",
          bankcode:"",
          accountnumber:"",
        })
       }
  }

  const getFetchData=async()=>{
    const data=await axios.get("/getbank")
    console.log(data)
    if(data.data.success){
      setDataList(data.data.data)
     
    }
  }
  useEffect(()=>{
  getFetchData()
  },[])
  const handleDelete=async(id)=>{
    const data=await axios.delete("/deleteB/"+id)
    // alert(data.data.message)
    if(data.data.success){
      getFetchData();
      alert(data.data.message)
    }
  }

  const handleUpdate=async(e)=>{
    e.preventDefault();
    const data=await axios.put("/updateB/",formDataEdit)
    if(data.data.success){
      getFetchData();
      alert(data.data.message)
      setEditsection(false)
    }
    console.log()
  }
  const handleEditOnChange=async(e)=>{
    const {value,name}=e.target
    setFormDataEdit((preve)=>{
     return {
       ...preve,
       [name]:value
     }
    })
  }

  const handleEdit=(el)=>{
    setFormDataEdit(el)
    setEditsection(true)
  }

  return (
   <>
   <div className="container">
    <button className="btn btn-add" onClick={()=>setAddSection(true)}>AddBank</button>
    {
      addSection && (
      <Formtable

      handleADD={handleADD}
      handleOnChange={handleOnChange}
      handleClose={()=>setAddSection(false)}

      rest={formData}
      />
      )
    }
    {
      editSection &&(
        <Formtable

      handleADD={handleUpdate}
      handleOnChange={handleEditOnChange}
      handleClose={()=>setEditsection(false)}
      rest={formDataEdit}
      />

        
      )
    }
     

     <div className='tableContainer'>
      <table>
        <thead>
          <tr>
            <th>BankCode</th>
            <th>BankName</th>
            <th>AccountNumber</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { dataList[0] ? (
            dataList.map((el)=>{
              return(
                <tr>
                  <td>{el.bankcode}</td>
                  <td>{el.bankname}</td>
                  <td>{el.accountnumber}</td>
                  <td>
                    <button className='btn btn-edit' onClick={()=>handleEdit(el)} >Edit</button>
                    <button className='btn btn-delete' onClick={()=>handleDelete(el._id)}>Delete</button>

                  </td>
                </tr>
              )

            })):<>No data</>
          }
        </tbody>
      </table>

     </div>
   </div>
   </>
  );
}

export default AddBank;