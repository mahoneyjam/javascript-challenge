// from data.js
let tableData = data;

// Grab the table body
let tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(tableData);

// Loop Through `tableData` and console.log each UFO report object
tableData.forEach(row => console.log(row));

// Append one table row `tr` for each UFO report object

tableData.forEach(row => {
    let nRow = tbody.append("tr");

    Object.entries(row).forEach(entry => {
        let key = entry[0];
        let val = entry[1];
        nRow.append("td").text(val);
    });


});




// Select the filter button
let button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // Select input date
    let inputDate = d3.select("#datetime");

    // Get the value of the input date
    let inputValue = inputDate.property("value");

    // console.log input value
    console.log(inputValue);

    // Filter Data with datetime equal to input value
    let matches = tableData.filter(sighting => sighting.datetime === inputValue);

    // console.log filter values
    console.log(matches);


    matches.forEach(function(selections) {
    console.log(selections);
    
    // Append one table row `tr` for each UFO report object
    let row = tbody.append("tr");

    // Use `Object.entries` to console.log each UFO report
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);

        // Append a cell to the row for each value
        let cell = row.append("td");
        cell.text(value);
});
});
});