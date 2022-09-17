const {fileExists,isCsvFile,validIndexColumn,validArgsCount} = require('./functions')

const {readCsvFile} = require('./readfile')

 const searchInFile = async (args)=>{
    if(!validArgsCount(args.length)){
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