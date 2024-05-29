
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import NumberToWords from 'number-to-words';
// import './Form.css'; // Import CSS file for styling
// import AddPaye from '../AddPaye/AddPaye';

// function Fill({ bankName }) {
  
//   const [formData, setFormData] = useState({
//     payeeName: '',
//     amount: '',
//     amountInWords: '',
//     date: new Date().toISOString().split('T')[0], // Today's date
//     language: 'english',
//   });

//   const [payees, setPayees] = useState([]);
//   const [showAddPayeeForm, setShowAddPayeeForm] = useState(false);

//   useEffect(() => {
//     // Fetch payee data from backend API
//     axios.get('/getpayee')
//       .then(response => {
//         if (response.data.success) {
//           setPayees(response.data.data);
//         } else {
//           console.error('Failed to fetch payees:', response.data.error);
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching payees:', error);
//       });
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//     if (name === 'amount') {
//       // Convert the amount to words
//       const words = NumberToWords.toWords(value);
//       setFormData(prevState => ({
//         ...prevState,
//         amountInWords: words
//       }));
//     }
//   };

//   const handlePrint = () => {
//     window.print();
//   };

//   const handleSave = () => {
//     // Save form data to local storage
//     localStorage.setItem('chequeFormData', JSON.stringify(formData));
//     alert('Form data saved!');
//   };

//   const handleAddPayee = () => {
//     setShowAddPayeeForm(true);
//   };
//   const handleCloseAddPayeeForm = () => {
//     setShowAddPayeeForm(false);
//   };

//   return (
//     <div className="cheque-form-container">
//       <div className="top-right-controls">
//         <label htmlFor="date">Date:</label>
//         <input
//           type="date"
//           id="date"
//           name="date"
//           value={formData.date}
//           onChange={handleChange}
//         />
//         <label htmlFor="language">Language:</label>
//         <select
//           id="language"
//           name="language"
//           value={formData.language}
//           onChange={handleChange}
//         >
//           <option value="english">English</option>
//           <option value="spanish">Spanish</option>
//           {/* Add more language options as needed */}
//         </select>
//       </div>
//       <h2>Cheque Form for {bankName}</h2>
//       <div>
//         <label htmlFor="payeeName">Payee Name:</label>
//         <select
//           id="payeeName"
//           name="payeeName"
//           value={formData.payeeName}
//           onChange={handleChange}
//         >
//           <option value="">Select Payee</option>
//           {payees.map(payee => (
//             <option key={payee.id} value={payee.PayeeName}>{payee.PayeeName}</option>
//           ))}
//         </select>
//       </div>
//       <div>
//         <label htmlFor="amount">Amount (in numbers):</label>
//         <input
//           type="text" // Change type to text to allow any length of words
//           id="amount"
//           name="amount"
//           value={formData.amount}
//           onChange={handleChange}
//           placeholder="Enter amount"
//         />
//       </div>
//       <div>
//         <label htmlFor="amountInWords">Amount (in words):</label>
//         <input
//           type="text"
//           id="amountInWords"
//           // value={formData.amountInWords}
//           value={`${formData.amountInWords} only`} 
//           readOnly
//           // style={{ width: `${formData.amountInWords.length}ch` }} 
//           style={{ fontFamily: 'Arial' }}

//           // Dynamically adjust width based on length of words

//           // Dynamically adjust width based on length of words
//         />
//       </div>
//       <div className="action-buttons">
//         <button onClick={handleSave}>Save</button>
//         <button onClick={handlePrint}>Print</button>
//         <button onClick={handleAddPayee}>Add Payee</button>
//         {/* Add menu button and other buttons here */}
//       </div>
//       {showAddPayeeForm && (
//         <AddPaye onClose={handleCloseAddPayeeForm} />
//       )}
//     </div>
//   );
// }

// export default Fill;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NumberToWords from 'number-to-words';
import './Form.css'; // Import CSS file for styling
import AddPaye from '../AddPaye/AddPaye';
// import axios from 'axios';




axios.defaults.baseURL="http://localhost:8080/"

function Fill({ bankName }) {
  const [formData, setFormData] = useState({
    payeeName: '',
    amount: '',
    amountInWords: '',
    date: new Date().toISOString().split('T')[0], // Today's date
    language: 'english',
  });

  const [payees, setPayees] = useState([]);
  const [showAddPayeeForm, setShowAddPayeeForm] = useState(false);

  useEffect(() => {
    // Fetch payee data from backend API
    axios.get('/getpayee')
      .then(response => {
        if (response.data.success) {
          setPayees(response.data.data);
        } else {
          console.error('Failed to fetch payees:', response.data.error);
        }
      })
      .catch(error => {
        console.error('Error fetching payees:', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    if (name === 'amount') {
      const amountInWords = NumberToWords.toWords(value);
      setFormData(prevState => ({
        ...prevState,
        amountInWords: amountInWords
      }));
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSave = async() => {
    // Save form data to local storage
    const data=await axios.post("/saveC",formData)
    console.log(data)
    alert('Form data saved!');
  };

  const handleAddPayee = () => {
    setShowAddPayeeForm(true);
  };

  const handleCloseAddPayeeForm = () => {
    setShowAddPayeeForm(false);
  };

  return (
    <div className="fill-container">
      <h2>Cheque Form for {bankName}</h2>
      <div>
        <label htmlFor="payeeName">Payee Name:</label>
        <select
          id="payeeName"
          name="payeeName"
          value={formData.payeeName}
          onChange={handleChange}
        >
          <option value="">Select Payee</option>
          {payees.map(payee => (
            <option key={payee.id} value={payee.PayeeName}>{payee.PayeeName}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="amount">Amount (in numbers):</label>
        <input
          type="text"
          id="amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Enter amount"
        />
      </div>
      <div>
        <label htmlFor="amountInWords">Amount (in words):</label>
        <input
          type="text"
          id="amountInWords"
          value={formData.amountInWords + ' only'}
          readOnly
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="language">Language:</label>
        <select
          id="language"
          name="language"
          value={formData.language}
          onChange={handleChange}
        >
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
        </select>
      </div>
      <div className="action-buttons">
        <button onClick={handleSave}>Save</button>
        <button onClick={handlePrint}>Print</button>
        <button onClick={handleAddPayee}>Add Payee</button>
      </div>
      {showAddPayeeForm && (
        <AddPaye onClose={handleCloseAddPayeeForm} />
      )}
    </div>
  );
}

export default Fill;









