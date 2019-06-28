const utils = require("./utils");
const thumbWar = require("./thumb-war");

const originalGetWinner = utils.getWinner;
console.log("original getwinner---", originalGetWinner); // original function getWinner from utils

const fakeGetWinner = (utils.getWinner = (player1, player2) => player1); // you are mocking getWinner from utils
console.log("rechanged getwinner---", fakeGetWinner);

const winner = thumbWar("kent c dodds", "kent wheeler");

it("run this test", () => {
  expect(winner).toEqual("kent c dodds");
});

utils.getWinner = originalGetWinner;
console.log('utils.getWinner', utils.getWinner); // u set it back to the original function from getWinner.
