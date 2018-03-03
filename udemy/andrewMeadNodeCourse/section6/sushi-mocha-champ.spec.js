const expect = require("chai").expect;

describe("Mocha ", () => {
  it("should compare 2 arrays to be equal", () => {
    const arr = [1, 2, 3];
    const arr2 = [2, 3, 1];

    expect(arr).to.have.deep.members(arr2); // compare un ordered arrays.
  });

  it("should have length of array", () => {
    expect([1, 2, 3]).to.have.lengthOf(3); // Recommended
  });
});

describe.only(' Mocha Property', () => {
    it('expect object {a: 1} to have property a', () => {
        expect({ a: 1}).to.include.property('a')
        expect({ a: 1}).to.have.all.keys('a');
    })
})

it("should compare 2 objects to be equal", () => {});

it("should check if an object has certain keys", () => {});
