const math = require('./../1-math');
const chai = require('chai');
const expect = chai.expect;

describe("Testing the addTwoNumbers function.", () => {
    it("Adding 50 and 70, expecting as a result 120", () => {
        const result1 = math.addTwoNumbers(50, 70);
        const expectedValue1 = 120;
        expect(result1).to.be.a("number");
        expect(result1).equal(expectedValue1);
    });

    it("Adding -20 and 15, expecting as a result -5.", () => {
        const result2 = math.addTwoNumbers(-20, 15);
        const expectedValue2 = -5;
        expect(result2).to.be.a("number");
        expect(result2).equal(expectedValue2);
    });

    it("Adding 'hello' and 5, exptecting as a result 'Values cannot be added because one or both of them are not numbers.'", () => {
        const result3 = math.addTwoNumbers("hello", 5);
        const expectedValue3 = "Values cannot be added because one or both of them are not numbers.";
        expect(result3).to.be.a("string");
        expect(result3).equal(expectedValue3);
    });
});

describe("Testing the addNumbersInArray function.", () => {

    it("Adding all numbers in the array [1,2,3,4,5,6,7,8,9,10]. Expecting as result 55", () => {
        const result4 = math.addNumbersInArray([1,2,3,4,5,6,7,8,9,10]);
        const expectedValue4 = 55;
        expect(result4).to.be.a("number");
        expect(result4).equal(expectedValue4);
    });
    
    it("Adding the string 'hey there'. Expecting as result 'Please send an array as argument.'", () => {
        const result5 = math.addNumbersInArray("hey there");
        const expectedValue5 = "Please send an array as argument.";
        expect(result5).to.be.a("string");
        expect(result5).equal(expectedValue5);
    });    
});
