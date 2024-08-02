// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import JsonInput from './JsonInput';
import Dropdown from './Dropdown';
import ResultDisplay from './ResultDisplay';
import './App.css';

function App() {
  const [jsonData, setJsonData] = useState('');
  const [apiResponse, setApiResponse] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleJsonSubmit = async (data) => {
    try {
      const response = await axios.post('https://your-backend-url.com/bfhl', data);
      setApiResponse(response.data);
    } catch (error) {
      console.error('Error submitting JSON:', error);
    }
  };

  const handleDropdownChange = (options) => {
    setSelectedOptions(options);
  };

  return (
    <div className="App">
      <h1>ABCD123</h1>
      <JsonInput onSubmit={handleJsonSubmit} />
      {apiResponse && <Dropdown onChange={handleDropdownChange} />}
      {apiResponse && <ResultDisplay response={apiResponse} selectedOptions={selectedOptions} />}
    </div>
  );
}

export default App;

