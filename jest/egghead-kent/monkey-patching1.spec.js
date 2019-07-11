const utils = require("./utils");
const thumbWar = require("./thumb-war");

const originalGetWinner = utils.getWinner; // original function getWinner from utils

const fakeGetWinner = (utils.getWinner = (player1, player2) => player1); // you are mocking getWinner from utils

const winner = thumbWar("kent c dodds", "kent wheeler");

it("run this test", () => {
  expect(winner).toEqual("kent c dodds");
});

utils.getWinner = originalGetWinner;  // u set it back to the original function from getWinner.
