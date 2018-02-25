const { add, setName, asyncAdd } = require("./utils/utils");
const expect = require("chai").expect;

describe("Utils Unit tests", () => {
  describe("#add", () => {
    it("should add two numbers", () => {
      expect(add(2, 3))
        .to.be.a("number")
        .to.equal(5);
      expect(add(2, -3))
        .to.be.a("number")
        .to.equal(-1);
    });
  });

  describe("#asyncAdd", () => {
    it("should add two numbers asynchronously", done => {
      asyncAdd(4, 3, sum => {
        expect(sum)
          .to.be.a("number")
          .to.equal(7);
        done();
      });
    });
  });

  describe("#setName", () => {
    it("should set name that is passed", () => {
      const user = {
        age: 10,
        id: 2234
      };

      const user2 = {
        age: 10,
        id: 2234,
        firstName: "Johhny",
        lastName: "Bravo"
      };
      const res = setName(user, "Johhny Bravo");
      expect(setName({}, "Johhny Bravo"))
        .to.be.an("object")
        .to.include({ firstName: "Johhny" });
      expect(setName(user, "Johhny Bravo"))
        .to.be.an("object")
        .to.include({ firstName: "Johhny" });
      expect(user).to.equal(res); // its the same user object. strict equal works here
    });
  });
});
