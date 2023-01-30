var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse(); 
// ------------------------
// slice first:
var topFiveCities = sortedCities.slice(0,5);
// ------------------------
// extract City names and Growth names:
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));
// ------------------------
// bar chart:
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);
// --------------------------
// top seven cities by population:
var topPopulation = cityGrowths.sort((a,b) =>
    a.population - b.population).reverse()
var topSeven = topPopulation.slice(0,7);
var topSevenNames = topSeven.map(city => city.City)
var topSevenPop = topSeven.map(city => parseInt(city.population))

var traceTopSeven = [{
    x: topSevenNames,
    y: topSevenPop,
    type: "bar"
}];
var layout = {
    title: "Top 7 Cities with Highest Population",
    xaxis: {title: "City"},
    yaxis: {title: "Population"}
};
Plotly.newPlot("bar-plot-2", traceTopSeven, layout);
