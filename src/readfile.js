const { once } = require('events');

const  readCsvFile = async(filePath,columnIndex,searchKey)=>{
    let rows = "";// TODO To Cross tHis Code In Another Function To Display 
    try {
        
    var lineReader = require('readline').createInterface({
        input: require('fs').createReadStream(filePath)
      });

      lineReader.on('line', function (line) {
        let row = line.split(",")
        // console.log(row[args[3]],args[4])
        if(row[columnIndex].toString() === searchKey.toString()){
            // console.log(line)
            rows += line;
        }

      });

      lineReader.on('close', function () {
        console.log(rows);
      });      
      await once(lineReader, 'close');
    } catch (error) {
        console.log("The File Path Does Not Exsists")        
    }

  }


  module.exports = {readCsvFile};