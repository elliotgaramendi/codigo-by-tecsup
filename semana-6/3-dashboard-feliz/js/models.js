export const models = () => {
  const dashboardModelsChart = document.getElementById('dashboardModelsChart');
  const data = {
    labels: ['JavaScript', 'HTML', 'CSS'],
    datasets: [{
      data: [60, 50, 50]
    }]
  };

  new Chart(dashboardModelsChart, { type: 'doughnut', data });
}

export default models;