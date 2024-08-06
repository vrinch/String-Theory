const { expect } = require('chai');
const { run } = require('./main');

describe("String Manipulation", function () {
    it("should return the correct combined queries for given input", function () {
        const result = run("ThIs is p");
        expect(result).to.equal("2 5::p iS tHiS::Th-Is-is-p::ThpvIs pvis p");
    });

    // Add more test cases as needed
});
