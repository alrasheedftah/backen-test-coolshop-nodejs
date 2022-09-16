const { isCsvFile, fileExists } = require('../functions');

// before(async() => {
    process.argv.push(['ana.csv',0,2])
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

