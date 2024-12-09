
import ChartComponent from './ChartComponent';

const ScatterChart = ({ data }) => {
  const scatterChartData = {
    datasets: [
      {
        label: 'Profits vs Expenses',
        data: data.profits.map((profit, index) => ({
          x: profit,  
          y: data.expenses[index],  
        })),
        backgroundColor: 'rgba(246, 36, 89, 1)', 
        borderColor: 'rgba(0, 0, 0, 1)', 
        borderWidth: 1,
        pointRadius: 5,
      },
    ],
  };

  const scatterChartOptions = {
    responsive: true,
    scales: {
      x: {
        type: 'linear', 
        title: {
          display: true,
          text: 'Profits', 
        },
      },
      y: {
        type: 'linear', 
        title: {
          display: true,
          text: 'Expenses', 
        },
      },
    },
  };

  return <ChartComponent type="scatter" data={scatterChartData} options={scatterChartOptions} />;
};

export default ScatterChart;
