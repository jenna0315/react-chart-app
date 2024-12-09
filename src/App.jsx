
import { useState, useEffect } from 'react';
import BarChart from './components/BarChart';
import ChartComponent from './components/ChartComponent';
import LineChart from './components/LineChart';
import ScatterChart from './components/ScatterChart';
import BubbleChart from './components/BubbleChart';


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
              <h4>Bar Chart</h4>
              <BarChart data={chartData} />
              <h4>Line Chart</h4>
              <LineChart data={chartData} />
              <h4>Scatter Chart</h4>
              <ScatterChart data={chartData} />
              <h4>Bubble Chart</h4>
              <BubbleChart data={chartData} />
            </div>
          );
}

export default App;
