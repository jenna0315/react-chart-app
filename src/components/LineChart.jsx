import ChartComponent from './ChartComponent';

const LineChart = ({data}) => {
    const lineChartData = {
        labels: data.months,
        datasets: [
            {
                label: 'Profits',
                data: data.profits,
                backgroundColor: 'rgba(246, 36, 89, 1)',
                borderColor: 'rgba(0, 0, 0, 1)',
                fill: false,
            },
            
        ],
    };
    const lineChartOptions = {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Months',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Profits',
            },
            beginAtZero: true, 
          },
        },
      };

    return <ChartComponent type="line" data={lineChartData} options={lineChartOptions}  />
};


export default LineChart;