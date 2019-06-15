const forEach222 = require("./1.for-each-function");

const mockCallBack = jest.fn(x => x + 42);
const items = [0, 1, 2];

describe("For-Each function", () => {
  beforeEach(() => {
    mockCallBack.mockClear();
  });
  it("should call the mock function thrice for an array of three items", () => {
    forEach222(items, mockCallBack);
    expect(mockCallBack.mock.calls.length).toBe(3);
  });
  it("should call 0 as the first argument of the first call to the callback function", () => {
    forEach222(items, mockCallBack);
    expect(mockCallBack.mock.calls[0][0]).toBe(0);
  });
  it("should call 1 as the second argument of the second call to the callback function", () => {
    forEach222(items, mockCallBack);
    expect(mockCallBack.mock.calls[1][0]).toBe(1);
  });
  it("should call 2 as the third argument of the third call to the callback function", () => {
    forEach222(items, mockCallBack);
    expect(mockCallBack.mock.calls[2][0]).toBe(2);
  });
  it("should return 42,43,44 as the result for the first, second,third argument", () => {
    forEach222(items, mockCallBack);
    expect(mockCallBack.mock.results[0].value).toBe(42);
    expect(mockCallBack.mock.results[1].value).toBe(43);
    expect(mockCallBack.mock.results[2].value).toBe(44);
  });
});
