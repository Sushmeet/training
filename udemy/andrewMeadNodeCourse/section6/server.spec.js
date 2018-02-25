const request = require("supertest");
const expect = require("chai").expect;

const app = require("./server").app;

describe("Express server testing", () => {
  it("should return the / page", done => {
   request(app)
      .get("/")
      .expect(200)
      .expect("help")
      .end(done);
  });

  it('should return the page not found', (done) => {
      request(app)
      .get('/noFound')
      .expect(404)
      .expect('Page not found')
      .end(done)
  })
});
