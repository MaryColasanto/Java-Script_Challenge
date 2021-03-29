// What my data looks like
// var data = [{
//     datetime: "1/1/2010",
//     city: "benton",
//     state: "ar",
//     country: "us",
//     shape: "circle",
//     durationMinutes: "5 mins.",
//     comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
//   },

//Define needed variables
var tableData = data;
var tableColumns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"];
var tableBody = d3.select("tbody");
var searchDate = d3.select("#datetime");
var button = d3.select("filter-btn");

//Make table
var loadTable = (ufoData) => {
    
    tableBody.html("");

    ufoData.forEach(sightings => {
        var tableRow = tableBody.append("tr");
        tableColumns.forEach(column => tableRow.append("td").text(sightings[column]))
    });

}

loadTable(tableData);