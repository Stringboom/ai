var xArray = Array.from({length: 20}, () => Math.random()*(6-3)+3).sort();
var yArray = Array.from({length: 20}, () => Math.random()*(6-3)+3).sort();

// Define Data
var data = [{
  x:xArray,
  y:yArray,
  mode:"lines",
  marker: {
    color: 'rgb(171, 255, 46)',
    size: 8,
  },
}];

// Define Layout
var layout = {
    
  xaxis: {range: [xArray[0]-.3, xArray[xArray.length-1]+.3], title: "X - Axis"},
  yaxis: {range: [yArray[0]-.3, yArray[yArray.length-1]+.3], title: "Y - Axis"},  
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