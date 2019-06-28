const myMock = jest.fn(); // myMock is a mock function.
myMock.mockImplementation(() => {
    
})


const a = new myMock();
const b = new myMock();

// mockFn.mock.instances[0] === a; // true
// mockFn.mock.instances[1] === b; // true

// const a = new myMock();
// console.log("a--", a);
// const b = { name: "sushi" };
// console.log("b--", b);

// const bound = myMock.bind(b);
// console.log(bound());

it("this is the test case", () => {
    console.log(myMock.mock.instances[0]);
});
