const utils = require("./utils");
const thumbWar = require("./thumb-war");

const spy = jest.spyOn(utils, 'getWinner')
const mocker = utils.getWinner.mockImplementation((player1, player2) => player1);
const winner = thumbWar("kent c dodds", "kent wheeler");


it("run this test", () => {
  expect(winner).toEqual("kent c dodds");
  // console.log(utils.getWinner);
  console.log(mocker.mock);
  spy.mockRestore();
  console.log(utils.getWinner);
});

// utils.getWinner = originalGetWinner;
spy.mockRestore(); // u set it back to the original function from getWinner
// console.log('utils.getWinner', utils.getWinner); // u set it back to the original function from getWinner.
