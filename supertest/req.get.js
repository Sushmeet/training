var express = require("express"),
  request = require("supertest"),
  assert = require("assert"),
  expect = require("chai").expect;

describe("req", () => {
  let app;
  beforeEach(() => {
    app = express();
  });
  describe(".get(field)", () => {
    it("should return the header value as application/json", done => {
      app.use((req, res) => {
        assert(req.get("Something-Else") === undefined);
        expect(req.get("Something-Else")).to.be.an("undefined");
        res.end(req.get("Content-Type"));
      });

      request(app)
        .post("/")
        .set("Content-Type", "application/json")
        .expect("application/json", done);
    });

    it("should special case Referrer", done => {
      app.use((req, res) => {
        res.end(req.get("Referrer"));
      });

      request(app)
        .post("/")
        .set("Referrer", "http://foobar.com")
        .expect("http://foobar.com", done);
    });

    it("should throw missing header name", done => {
      app.use((req, res) => {
        res.end(req.get());
      });

      request(app)
        .get("/")
        .expect(500, /TypeError: name argument is required to req.get/, done);
    });

    it("should throw error for non-string header name", done => {
      app.use((req, res) => {
        res.end(req.get(67));
      });
      
      request(app)
        .get("/")
        .expect(500, /TypeError: name must be a string to req.get/, done);
    });
  });
});
