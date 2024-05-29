// SevenButtonsPage.js

import React from 'react';
import './Home.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from 'react-router-dom';


const Home = () => {
  const handlecl=()=>{
    console.log("setting page")
  }
  return (
    <div className="seven-buttons-container">


<div className="seven-buttons-container">
    <Link to="/SelectBank">
    <button className="button blue">
        <i className="fas fa-university"></i> SelectBank
      </button>
    </Link> 
     <Link to="/AddPaye">
     <button className="button green">
        <i className="fas fa-user"></i> AddPaye
      </button>
     </Link>
    <Link to="/Batch">

    <button className="button yellow">
        <i className="fas fa-print"></i> BatchPrinting
      </button>
    </Link>
      <Link to="/AddBank">
      <button className="button purple">
        <i className="fas fa-layer-group"></i> AddBank
      </button>
      </Link>
    <Link to="/Design">
    <button className="button orange">
        <i className="fas fa-money-check-alt"></i> DesignCheque
      </button>
    </Link>
     <Link to="/Settings">
     <button className="button pink" onClick={handlecl}>
        <i className="fas fa-cog"></i> SettingsPage
      </button>
     </Link>
     <Link to="/Report">
     <button className="button cyan">
        <i className="fas fa-file-alt"></i> Report
      </button>
     </Link>
     <Link to="/users">
     <button className="button grey">
        <i className="fas fa-users"></i> Users
      </button>
     </Link>
     <Link to="/Exit">
     <button className="button red">
        <i className="fas fa-sign-out-alt"></i> Exit
      </button>
     </Link>
    </div>
   </div>
  );
};

export default Home;
