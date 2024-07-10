// src/App.js
import React, { useState } from 'react';
import CSVReader from './components/CSVReader';
import Heatmap from './components/Heatmap';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [metric, setMetric] = useState('');

  return (
    <div className="App">
      <CSVReader setData={setData} />
      {data.length > 0 && (
        <>
          <select onChange={(e) => setMetric(e.target.value)}>
            {Object.keys(data[0]).map((key, index) => (
              <option key={index} value={key}>{key}</option>
            ))}
          </select>
          <Heatmap data={data} metric={metric} />
        </>
      )}
    </div>
  );
}

export default App;
