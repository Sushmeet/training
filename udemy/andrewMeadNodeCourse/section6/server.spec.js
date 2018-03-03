const request = require("supertest");
const expect = require("chai").expect;

//const app = require("./server").app; // uncomment this for test to work.

describe("Express server testing", () => {
  describe("GET /", () => {
    it("should return the / page", done => {
      request(app)
        .get("/")
        .expect(200)
        .expect("help")
        .end(done);
    });
  });

  describe("GET /noFound", () => {
    it("should return the page not found", done => {
      request(app)
        .get("/noFound")
        .expect(404)
        .expect("Page not found")
        .end(done);
    });
  });

  describe("GET /users", () => {
    it("should return back the user sushi", done => {
      request(app)
        .get("/users")
        .expect(200)
        .expect(res => {
          expect(res.body).to.deep.include({
            name: "john",
            age: 4
          });
        })
        .end(done);
    });
  });
});
