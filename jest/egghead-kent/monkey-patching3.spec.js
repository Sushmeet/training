const utils = require("./utils");
const thumbWar = require("./thumb-war");

const originalGetWinner = utils.getWinner;

function fn(impl) {
  console.log('impl---', impl)
  const mockFn = (...banana) => {
    mockFn.mock.calls.push(banana)
    return impl(...banana)
  }
  mockFn.mock = {
    calls: []
  }
  return mockFn;
}

const fakeGetWinner = utils.getWinner = fn((player1, player2) => player1); // you are mocking getWinner from utils

const winner = thumbWar("kent c dodds", "kent wheeler");

it("run this test", () => {
  expect(winner).toEqual("kent c dodds");
});

// clean up, restore original function.
utils.getWinner = originalGetWinner;
