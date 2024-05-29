import React, { useState } from 'react';
import axios from 'axios'; // You might need to install axios using npm or yarn

function Report() {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [report, setReport] = useState('');

    const handleSubmit = async (event) => {
        
        event.preventDefault();
        
        try {
            const response = await axios.post('/saveC', {
                startDate,
                endDate
            });
            setReport(response);
        } catch (error) {
            console.error('Error generating report:', error);
        }
    };

    return (
        <div>
            <h2>Cheque Report Generator</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="startDate">Start Date:</label>
                <input 
                    type="date" 
                    id="startDate" 
                    name="startDate" 
                    value={startDate} 
                    onChange={(e) => setStartDate(e.target.value)} 
                    required 
                />
                <label htmlFor="endDate">End Date:</label>
                <input 
                    type="date" 
                    id="endDate" 
                    name="endDate" 
                    value={endDate} 
                    onChange={(e) => setEndDate(e.target.value)} 
                    required 
                />
                <button type="submit">Generate Report</button>
            </form>
            <div className="report">
                {report && (
                    <div>
                        <h3>Generated Report:</h3>
                        <pre>{JSON.stringify(report, null, 2)}</pre>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Report;
