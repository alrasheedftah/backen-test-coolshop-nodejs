const { isCsvFile, fileExists, validArgsCount, validIndexColumn } = require('../src/functions');
const { readCsvFile } = require('../src/readfile');
const { searchInFile } = require('../src/search');

// before(async() => {
    process.argv.push('ana.csv')
    process.argv.push('0')
    process.argv.push('1')
    let filePath = "ana.csv"
// })



describe(" Test For Functionalit Of  File  ",()=>{

    it("Check File Extsention is Founds  ",async()=>{
        expect(isCsvFile(filePath)).toBeDefined();
    })

    it("Check File Extsention is Valid  ",async()=>{
        let res = await isCsvFile(filePath);
        expect(res).toBe(true);
        // expect(Object.is(isCsvFile(filePath), true)).toBe(false)
    })

    it("Check Method FileExsits  is Founds  ",async()=>{
        expect(fileExists(filePath)).toBeDefined();
    })

    it("Check File Exsit Or Not ",async()=>{
        let res = await fileExists(filePath);
        expect(res).toBe(true);
    })

})



describe(" Test For Arguments  ",()=>{

    it("check the Args Counts Is Valid   ",async()=>{
        let res = await validArgsCount(process.argv.length);
        expect(res).toBe(true);
        // expect(Object.is(isCsvFile(filePath), true)).toBe(false)
    })

    it("Check The 2sc argument is Been Index  ",async()=>{
        let res = await validIndexColumn(process.argv[3]);
        expect(res).toBe(true);
    })


})


// TODO Add Describe For Read And Search Method 

describe(" Test For Reads Csv File  ",()=>{

    it("check the file Exist Befor Read ",async()=>{
        console.log = jest.fn();
        await readCsvFile("ana/ana.csv",0,1);
        await expect(console.log).toHaveBeenCalledWith("The File Path Does Not Exsists");
        // expect(Object.is(isCsvFile(filePath), true)).toBe(false)
    })

    it("check the Read From Csv File should pass ",async()=>{
        console.log = jest.fn();
        await readCsvFile("ana.csv",0,1);
        await expect(console.log).toHaveBeenCalledWith("1,Rossi,Fabio,01/06/1990;");
        // expect(Object.is(isCsvFile(filePath), true)).toBe(false)
    })

})


describe(" Test For Search Method   ",()=>{

    it("check the Search Arguments should pass ",async()=>{
        console.log = jest.fn();
        await searchInFile(process.argv);
        await expect(console.log).toHaveBeenCalledWith("1,Rossi,Fabio,01/06/1990;");
        // expect(Object.is(isCsvFile(filePath), true)).toBe(false)
    })

    it("check the Search Arguments 2sc Should number and Integer ",async()=>{
        process.argv[3] = 6.8
        console.log(process.argv)
        console.log = jest.fn();
        await searchInFile(process.argv);
        await expect(console.log).toHaveBeenCalledWith("Sorry The Column Index Must Be integre 0 or greater");
        // expect(Object.is(isCsvFile(filePath), true)).toBe(false)
    })


    it("check the Search Arguments SHould 3 count ",async()=>{
        process.argv.push(2)
        console.log = jest.fn();
        await searchInFile(process.argv);
        await expect(console.log).toHaveBeenCalledWith("The Number Of Arguments Should Be 3 args file-path and index number and searchKey");
        // expect(Object.is(isCsvFile(filePath), true)).toBe(false)
    })



})

