import React from "react";
import './AddPaye.css'

const Formtable=({handleADD,handleOnChange,handleClose,rest})=>{
    return(
        <div className="addcontainer">
        <form onSubmit={handleADD}>
  
          <lable htmlFor="sn">SN:</lable>
          <input type="Number" id="sn" name="sn" onChange={handleOnChange} value={rest.sn}></input>
          <lable htmlFor="PayeeName">PayeeName:</lable>
          <input type="text" id="PayeeName" name="PayeeName" onChange={handleOnChange} value={rest.PayeeName}></input>
          
          <button>ADD</button>
          <button onClick={handleClose}>Close</button>
        </form>
  
      </div>
    )
}
export default Formtable;