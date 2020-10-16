import React from 'react';
import axios from 'axios';
import Doughnut  from 'react-chartjs-2';





const dataSource = {
  datasets: [{
      data: [30, 350, 90, 100, 200, 300, 400],
      backgroundColor: [
              '#F70505',
              '#0000FF',
              '#16F705',
              '#05E7F7',
              '#F705F7',
              '#EFF705',
              '#F75605'
          ],
  }],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
      'Eat Out',
      'Rent',
      "Car Payment",
      "Entertainment",
      "Medical",
      "Savings",
      'Groceries'
  ]
  };

  axios.get('/budget',( req, res) => {

    
    res.sendFile('budget-data.json', { root: __dirname });
    


  });

  function createChart(){
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: dataSource

    });
}

function getBudget(){
    axios.get('/budget')
    .then(function (res){
        console.log(res.data);
        for (var i = 0; i < res.data.length; i++){
            dataSource.datasets[0].data[i] = res.data[i].budget;
            dataSource.labels[i] = res.data[i].title;
        }

        createChart();
    });

    getBudget();



}
  
    function Chart() {
      return (
        
        <div className="text-box">
          <div className="container center">
        <Doughnut data={dataSource} />
        </div>
         </div>
        
    
      );
    }
    
    export default Chart;

    