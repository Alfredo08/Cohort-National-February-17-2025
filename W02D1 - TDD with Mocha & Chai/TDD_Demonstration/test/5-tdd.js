const math = require('./../1-math');
const chai = require('chai');
const expect = chai.expect;

describe("Testing isOdd function", () => {
    it("Should return true if number = 1", () => {
        const result1 = math.isOdd(1);
        const expectedValue1 = true;
        expect(result1).equal(expectedValue1);
    });

    it("Should return false if number = 2", () => {
        const result2 = math.isOdd(2);
        const expectedValue2 = false;
        expect(result2).equal(expectedValue2);
    });

    it("Should return null if number = 'hey there'", () => {
        const result3 = math.isOdd("hey there");
        const expectedValue3 = null;
        expect(result3).equal(expectedValue3);
    });

    it("Should return null if number = 2.4", () => {
        const result4 = math.isOdd(2.4);
        const expectedValue4 = null;
        expect(result4).equal(expectedValue4);
    });
});