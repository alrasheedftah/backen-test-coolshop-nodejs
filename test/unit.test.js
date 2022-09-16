const { isCsvFile, fileExists, validArgsCount, validIndexColumn } = require('../functions');

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

    it("Check File Exsit Or Not ",async()=>{
        let res = await fileExists(filePath);
        expect(res).toBe(true);
    })

})

