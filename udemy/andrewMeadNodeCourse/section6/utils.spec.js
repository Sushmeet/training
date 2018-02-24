const { add } = require("./utils/utils");
const expect = require("chai").expect;


// expect([2,3,4]) an array toInclude(2)
// expect({name: 'job', age: 10}).toInclude({age: 10}) // so u only care about some properties

// write test should verify first and last names are set
// assert it includes firstName and lastName with proper values 

describe("Utils Unit tests", () => {
  it("should add two numbers", () => {
    expect(add(2, 3)).to.equal(5);
    expect(add(2, -3)).to.equal(-1); // also check if its anumber.
  });
});
