// src/components/CSVReader.js
import React from 'react';
import Papa from 'papaparse';

const CSVReader = ({ setData }) => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        setData(results.data);
      },
      error: (error) => {
        console.error('Error parsing CSV file:', error);
      }
    });
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
    </div>
  );
};

export default CSVReader;
