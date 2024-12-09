import ChartComponent from './ChartComponent';

const BubbleChart = ({ data }) => {
  const bubbleChartData = {
    datasets: [
      {
        label: 'Sales, Profits, Expenses',
        data: data.sales.map((sale, index) => ({
          x: sale,  
          y: data.profits[index],  
          r: data.expenses[index],  
        })),
        backgroundColor: 'rgba(246, 36, 89, 1)', // Bubble color
        borderColor: 'rgba(0, 0, 0, 1)', // Border color
        borderWidth: 1.5,
      },
    ],
  };

  const bubbleChartOptions = {
    responsive: true,
    scales: {
      x: {
        type: 'linear', 
        title: {
          display: true,
          text: 'Sales', 
        },
      },
      y: {
        type: 'linear', 
        title: {
          display: true,
          text: 'Profits', 
        },
      },
    },
  };

  return <ChartComponent type="bubble" data={bubbleChartData} options={bubbleChartOptions} />;
};

export default BubbleChart;

