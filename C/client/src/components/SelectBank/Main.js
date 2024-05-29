// MainComponent.js
import React, { useState } from 'react';
import Fill from './Fill';
import Selectbank from './Selectbank';

function Main() {
  const [selectedBank, setSelectedBank] = useState(null);

  const handleBankSelect = (bankName) => {
    setSelectedBank(bankName);
  };

  return (
    <div>
      
      <Selectbank onBankSelect={handleBankSelect} />
      
      {selectedBank && (
        <div>
          {/* <h3>Form for {selectedBank}</h3> */}
          <Fill bankName={selectedBank} />
        </div>
      )}
    </div>
  );
}

export default Main;
