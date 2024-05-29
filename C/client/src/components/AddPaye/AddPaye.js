// import logo from './logo.svg';
import './AddPaye.css';
import { useEffect, useState } from 'react';
import axios from "axios"
import Formtable from './FormtableP';


axios.defaults.baseURL="http://localhost:8080/"

function AddPaye({onClose}) {

  const [addSection,setAddSection]=useState(false)
  const [editSection,setEditsection]=useState(false)


  const [formData,setFormData]=useState({
    sn:"",
    PayeeName:"",

  })
  const [formDataEdit,setFormDataEdit]=useState({
    sn:"",
    PayeeName:"",

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
       const data=await axios.post("/createPayee",formData)
       console.log(data)
       if(data.data.success){
        setAddSection(false)
        alert(data.data.message)
        getFetchData()
        setFormData({
          sn:"",
          PayeeName:"",
          
        })
       }
  }

  const getFetchData=async()=>{
    const data=await axios.get("/getpayee")
    console.log(data)
    if(data.data.success){
      setDataList(data.data.data)
     
    }
  }
  useEffect(()=>{
  getFetchData()
  },[])
  const handleDelete=async(id)=>{
    const data=await axios.delete("/deletePayee/"+id)
    // alert(data.data.message)
    if(data.data.success){
      getFetchData();
      alert(data.data.message)
    }
  }

  const handleUpdate=async(e)=>{
    e.preventDefault();
    const data=await axios.put("/updatePayee/",formDataEdit)
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
    <button className="btn btn-add" onClick={()=>setAddSection(true)}>AddPayee</button>
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
            <th>SN</th>
            <th>PayeeName</th>
            <th></th>
            
          </tr>
        </thead>
        <tbody>
          { dataList[0] ? (
            dataList.map((el)=>{
              return(
                <tr>
                  <td>{el.sn}</td>
                  <td>{el.PayeeName}</td>
                  
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
     <button onClick={onClose}>Close</button>
   </div>
   </>
  );
}

export default AddPaye;





