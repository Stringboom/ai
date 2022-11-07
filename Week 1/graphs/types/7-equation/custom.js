var exp = "Math.sin(x)";

// Generate values
var xValues = [];
var yValues = [];
for (var x = 0; x <= 10; x += 0.1) { 
  yValues.push(eval(exp)); 
  xValues.push(x);
}
// Display using Plotly
var data = [{
  x:xValues, 
  y:yValues, 
  mode:"lines",
  marker: {
    color: 'rgb(171, 255, 46)',
    size: 8,
  },
}];

var layout = {
  title: "Graph With Plotly - " + exp,
  paper_bgcolor:'rgba(0,0,0,0)',
  plot_bgcolor:'rgba(0,0,0,0)',
  font: {
    family: 'Courier New, monospace',
    size: 15,
    color: '#7f7f7f'
  },
};

Plotly.newPlot("sin", data, layout);

// Cos
exp = "Math.cos(x)";
xValues = [];
yValues = [];
for (var x = 0; x <= 10; x += 0.1) { 
  yValues.push(eval(exp)); 
  xValues.push(x);
}
data[0].x = xValues;
data[0].y = yValues;
layout.title = "Graph With Plotly - " + exp;
Plotly.newPlot("cos", data, layout);


// Tan
exp = "Math.tan(x)";
xValues = [];
yValues = [];
for (var x = 0; x <= 10; x += 0.1) { 
  yValues.push(eval(exp)); 
  xValues.push(x);
}
data[0].x = xValues;
data[0].y = yValues;
layout.title = "Graph With Plotly - " + exp;
Plotly.newPlot("tan", data, layout);

// zero
exp = "0";
xValues = [];
yValues = [];
for (var x = 0; x <= 10; x += 0.1) { 
  yValues.push(eval(exp)); 
  xValues.push(x);
}
data[0].x = xValues;
data[0].y = yValues;
layout.title = "Graph With Plotly - " + exp;
Plotly.newPlot("zero", data, layout);

// extra
exp = "x";
xValues = [];
yValues = [];
for (var x = 0; x <= 10; x += 0.1) { 
  yValues.push(eval(exp)); 
  xValues.push(x);
}
data[0].x = xValues;
data[0].y = yValues;
layout.title = "Graph With Plotly - " + exp;
Plotly.newPlot("extra", data, layout);