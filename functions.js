const fs = require('fs')
const path = require('path');



function validArgsCount(argsCounts){
    if(argsCounts == 5){
        return true;
    }
    return false;
  }


const  isCsvFile =  async (filePath)=>{
    let fileExt = filePath.split('.')[1]; // if not . get undefined TODO Check is file Or Not
    // console.log(fileExt); //check
    if(fileExt == 'csv' ){
        return true;
    }
    return false;
}


const  fileExists = async (filePath) => {
    if(fs.existsSync(filePath)){
        console.log(fs.existsSync(filePath))
        return true;
    }
    return false;
 }

 function validIndexColumn(columnIndex){
    if(!isInt(columnIndex) || columnIndex < 0){
        return false;
    }
    return true;
  }

  function isInt(n) {// if number or not and if integer or numt do the same or i can use IsNan to check number
    return n % 1 === 0;
  }


module.exports = {isInt,validArgsCount,validIndexColumn,isCsvFile,fileExists}
