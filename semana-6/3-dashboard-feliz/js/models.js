export const models = () => {
  // Chart.defaults.color = '#fff';
  const dashboardModelsChart = document.getElementById('dashboardModelsChart');
  const data = {
    labels: ['JavaScript', 'HTML', 'CSS'],
    datasets: [{
      data: [60, 50, 50],
      borderColor: ['red', 'green', 'blue'],
      backgroundColor: ['#0008', 'brown', 'skyblue']
    }]
  };

  const options = {
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  }

  new Chart(dashboardModelsChart, {
    type: 'doughnut',
    data,
    options
  });
}

export default models;