const expect = require("chai").expect;
const { orderTotal } = require("./totalPrice.js");

describe("Total Price Tests", () => {
  it("should sum the total of quantity items and shipping items", () => {
    const order = {
        items: [
          { name: "choclates", price: 30, quantity: 10 },
          { name: "apples", price: 8, quantity: 2 },
          { name: "samsung tv", price: 1000, shipping: true }
        ]
      };
    const result = orderTotal(order);
    expect(result).to.equal(1316);
  });
});
