var xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
var yArray = [55, 49, 44, 24, 15];
// Define Data
var data = [{
  labels:xArray, 
  values:yArray, 
  type:"pie",
  hole: .4,
}];

// Define Layout
var layout = {
  title: "Graph With Plotly",
  paper_bgcolor:'rgba(0,0,0,0)',
  plot_bgcolor:'rgba(0,0,0,0)',
  font: {
    family: 'Courier New, monospace',
    size: 15,
    color: '#7f7f7f'
  },
  
};

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);