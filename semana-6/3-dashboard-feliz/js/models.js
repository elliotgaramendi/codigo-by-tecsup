import { getColorsData } from "../helpers/helper.js";

export const models = () => {
  // Chart.defaults.color = '#fff';

  const dashboardModelsChart = document.getElementById('dashboardModelsChart');
  const data = {
    labels: ['JavaScript', 'HTML', 'CSS'],
    datasets: [{
      data: [60, 50, 50],
      borderColor: getColorsData(),
      backgroundColor: getColorsData(40)
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