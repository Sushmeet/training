const { add } = require("./utils/utils");
const expect = require("chai").expect;


describe("Utils Unit tests", () => {
  it("should add two numbers", () => {
    expect(add(2, 3)).to.equal(5);
    expect(add(2, -3)).to.equal(-1); // also check if its anumber.
  });
});
