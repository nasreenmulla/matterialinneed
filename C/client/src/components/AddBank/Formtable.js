import React from "react";
import './AddBank.css'

const Formtable=({handleADD,handleOnChange,handleClose,rest})=>{
    return(
        <div className="addcontainer">
        <form onSubmit={handleADD}>
  
          <lable htmlFor="bankcode">BankCode:</lable>
          <input type="Number" id="bankcode" name="bankcode" onChange={handleOnChange} value={rest.bankcode}></input>
          <lable htmlFor="bankcname">BankName::</lable>
          <input type="text" id="bankname" name="bankname" onChange={handleOnChange} value={rest.bankname}></input>
          <lable htmlFor="accountnumber">AccountNumber:</lable>
          <input type="Number" id="accountnumber" name="accountnumber" onChange={handleOnChange} value={rest.accountnumber}></input>
          <button>ADD</button>
          <button onClick={handleClose}>Close</button>
        </form>
  
      </div>
    )
}
export default Formtable;