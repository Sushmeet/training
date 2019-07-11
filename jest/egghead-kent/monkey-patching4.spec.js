const utils = require("./utils");
const thumbWar = require("./thumb-war");

const spy = jest.spyOn(utils, 'getWinner')
const mockGetWinner = utils.getWinner.mockImplementation((player1, player2) => player1);
const winner = thumbWar("kent c dodds", "kent wheeler");


it("run this test", () => {
  expect(winner).toEqual("kent c dodds");
  expect(utils.getWinner.mock.calls).toEqual([
    [ 'kent c dodds', 'kent wheeler' ],
    [ 'kent c dodds', 'kent wheeler' ],
  ])
  spy.mockRestore();
});
