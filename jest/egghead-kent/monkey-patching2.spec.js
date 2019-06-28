const utils = require("./utils");
const thumbWar = require("./thumb-war");

const originalGetWinner = utils.getWinner;

const mockGetWinner = utils.getWinner = jest.fn((player1, player2) => player1); // you are mocking getWinner from utils

const winner = thumbWar("kent c dodds", "kent wheeler");

it("run this test", () => {
  expect(mockGetWinner.mock.calls).toEqual([
    [ 'kent c dodds', 'kent wheeler' ],
    [ 'kent c dodds', 'kent wheeler' ],
  ])
  expect(mockGetWinner.mock.calls.length).toBe(2);



  
  //  expect(winner).toEqual("kent c dodds");
  // expect(mockGetWinner).toHaveReturnedWith("kent c dodds");
  // expect(mockGetWinner).toHaveBeenCalledTimes(2)
  // expect(mockGetWinner).toHaveBeenLastCalledWith("kent c dodds", "kent wheeler")
  // expect(mockGetWinner).toHaveBeenNthCalledWith(1, "kent c dodds", "kent wheeler")
  // expect(mockGetWinner).toHaveBeenNthCalledWith(2, "kent c dodds", "kent wheeler")
});

utils.getWinner = originalGetWinner;
