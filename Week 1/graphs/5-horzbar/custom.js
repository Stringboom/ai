var xArray = [55, 49, 44, 24, 15];
var yArray = ["Italy","France","Spain","USA","Argentina"];

var data = [{
  x: xArray, 
  y: yArray, 
  type: "bar", 
  orientation: "h",
  marker: {
    color: 'rgb(171, 255, 46)',
    size: 8,
  },
}];

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

Plotly.newPlot("myPlot", data, layout);