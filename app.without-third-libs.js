const { exit } = require('process');

const args = process.argv;
isInt(args[3]);
validArgsCount();
checkTheCsvFileExtentionValid();
validIndexColumn();
readCsvFile();


function validIndexColumn(){
    let columnIndex = args[3];
    if(!isInt(columnIndex) || columnIndex < 0){
        console.log("The Argument that represent the column index must be integer 0 or greater than ")
        exit();
    }
  }

  function isInt(n) {// if number or not and if integer or numt do the same or i can use IsNan to check number
    // console.log(n % 1 === 0);
    // isNumeric();
    return n % 1 === 0;
  }


  function isNumeric(num){
    return !isNaN(num)
  }


  function validArgsCount(){
    if(args.length != 5){
        console.log("The Number Of Arguments Should Be 3 args file-path and index number and searchKey")
        exit();
    }
  }


  function readCsvFile(){
    var lineReader = require('readline').createInterface({
        input: require('fs').createReadStream('ana.csv')
      });
      
      lineReader.on('line', function (line) {
        let row = line.split(",")
        // console.log(row[args[3]],args[4])
        if(row[args[3]] === args[4]){
            console.log(line)
        }
        //console.log('Line from file:', line.split(",").length);
      });
    
  }



  function checkTheCsvFileExtentionValid(){
        let fileExt = process.argv[2].split('.')[1]; // if not . get undefined TODO Check is file Or Not
        // console.log(fileExt); //check
        if(fileExt != 'csv' ){
            console.log("The File Must Be .csv Etention ")
            exit();
        }
  }
