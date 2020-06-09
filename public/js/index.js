// Home Start

// For drawing the lines
var pesos = [86, 80, 76];

var ctx = document.getElementById("weightChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: pesos,
    datasets: [{
      data: pesos,
      label: "Pesos",
      borderColor: "#E360DE",
      fill: false
    }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        display: false
      }],
      xAxes: [{
        display: true,
      }]
    }
  }
});

// Home End
