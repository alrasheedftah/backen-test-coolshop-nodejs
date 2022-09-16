const fs = require('fs');
const { parse } = require("csv-parse");
const readline = require('readline');


fs.createReadStream("./ana.csv")
  .pipe(parse({ delimiter: "," }))
  .on("data", function (row) {
    console.log(row);
  })