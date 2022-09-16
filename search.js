const {fileExists,isCsvFile,validIndexColumn,validArgsCount} = require('./functions')

const  readCsvFile = async(filePath,columnIndex,searchKey)=>{
    let rows = "";
    var lineReader = require('readline').createInterface({
        input: require('fs').createReadStream(filePath)
      });
      lineReader.on('line', function (line) {
        let row = line.split(",")
        // console.log(row[args[3]],args[4])
        if(row[columnIndex] === searchKey){
            rows += line +"\n";
        }
      });

      lineReader.on('close',(res)=>{
        console.log(rows)
      })
  }


 const searchInFile = async (args)=>{
    console.log(args)
    if(validArgsCount(args)){
        console.log("The Number Of Arguments Should Be 3 args file-path and index number and searchKey")
        return ;
    }
    if(!fileExists(args[2])){
        console.log("The File Does not Exsit In Specfic Path ")
        return ;
    }
 
    if(!isCsvFile(args[2])){
        console.log("The File Must Be .csv Etention ")
        return ;
    }

    if(!validIndexColumn(args[3])){
        console.log("Sorry The Column Index Must Be integre 0 or greater")
        return
    }

     await readCsvFile(args[2],args[3],args[4])

  }

  module.exports = {searchInFile};