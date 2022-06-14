import { getColorsData } from "../helpers/helper.js";

export const models = (allData) => {
  // Chart.defaults.color = '#fff';

  // const uniqueModels = [...new Set(allData.map(element => element.model))];
  const uniqueModels = allData.reduce((previous, current) => {
    const exist = previous.find(element => element === current.model);
    if (exist === undefined) {
      previous.push(current.model);
    }
    return previous;
  }, []);

  const amountsModels = uniqueModels.map(model => allData.filter(element => element.model === model).length);

  const dashboardModelsChart = document.getElementById('dashboardModelsChart');
  const data = {
    labels: uniqueModels,
    datasets: [{
      data: amountsModels,
      borderColor: getColorsData(),
      backgroundColor: getColorsData(40)
    }]
  };

  const options = {
    plugins: {
      legend: {
        position: 'left'
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