

const  readCsvFile = async(filePath,columnIndex,searchKey)=>{
    var lineReader = require('readline').createInterface({
        input: require('fs').createReadStream(filePath)
      });
      lineReader.on('line', function (line) {
        let row = line.split(",")
        // console.log(row[args[3]],args[4])
        if(row[columnIndex] === searchKey){
            console.log(line)
        }
      });
  }

  module.exports = readCsvFile;