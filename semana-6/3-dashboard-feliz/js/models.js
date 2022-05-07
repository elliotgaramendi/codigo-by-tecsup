import { getColorsData } from "../helpers/helper.js";
import { allData } from "../utils/allData.js";

export const models = () => {
  // Chart.defaults.color = '#fff';

  console.log(allData);

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