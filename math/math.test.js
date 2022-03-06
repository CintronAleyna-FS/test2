const { add, subtract, divide, multiply, squareroot, max } = require("./math")    


describe("Testing the math module", () => {

    test("should get the sum of two numbers", ()=> {
        expect(add(1,1)).toBe(2);
    });
    
    test("should subtract a number from a number", ()=> {
        expect(subtract(7,5)).toBe(2);
    });

    test("should divide a number by a number", ()=> {
        expect(divide(10,2)).toBe(5);
    });

    test("should multiply two numbers", ()=> {
        expect(multiply(5,3)).toBe(15);
    });

    test("should get the squre root of a number", ()=> {
        expect(squareroot(4)).toBe(2);
    });

    test("should get the largest number", ()=> {
        expect(max(4,13,9)).toBe(13);
    });
    
})