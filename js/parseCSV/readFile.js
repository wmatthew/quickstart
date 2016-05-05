// Parses CSV data, puts it in a 2D array.
// Usage: node readFile.js
var fs = require('fs')

// Configuration
var commentCharacter = '#'
var delimiterCharacter = ','

var csvData = fs.readFileSync('data.csv', 'utf8')
parse2DArray(csvData);
console.log('done');

function parse2DArray(data) {
	var rows = data.split('\n');
	var arr = [];

	var shortestRow;
	var longestRow;

	for (rowStr of rows) {

		// Skip comment rows
		if (rowStr.startsWith(commentCharacter)) continue;

		// Skip empty rows
		if (rowStr.length == 0) continue;

		var rowArr = rowStr.split(delimiterCharacter);

		shortestRow = (rowArr.length > shortestRow) ? shortestRow : rowArr.length;
		longestRow = (rowArr.length < longestRow) ? longestRow : rowArr.length;

		arr.push(rowArr);
	}

	// Report
	console.log("Rows in file: " + rows.length);
	console.log("Rows parsed: " + arr.length);

	check(arr.length > 0, "some nonzero number of rows should be parsed");
	check(shortestRow > 0, "all rows should have cells");
	check(shortestRow == longestRow, "rows should have same length. range: " + shortestRow + "-" + longestRow);

	return arr;
}

function check(condition, message) {
	if (!condition) {
		console.log("Uh-oh: " + message);
	}
}
