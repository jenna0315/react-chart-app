
import { useState, useEffect } from 'react';
import BarChart from './components/BarChart';
import ChartComponent from './components/ChartComponent';

function App() {
    const [chartData, setChartData] = useState(null);
    useEffect(() => {
        fetch('financial_data.json')
          .then((response) => response.json())
          .then((data) => setChartData(data));
      }, []);
      if (!chartData) {
        return <div>Loading...</div>;
      }
    return (
            <div style={{ textAlign: 'center' }}>
              <h2>Interactive Charts with React and Chart.js
              </h2>
              <BarChart data={chartData} />
            </div>
          );
}

export default App;
