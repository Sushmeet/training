const request = require("supertest");
const { app } = require("../server");
const { Todo } = require("../models/todo");
const expect = require("chai").expect;

describe("POST /Todos", () => {
  beforeEach("Delete all entries in database", () => {
    return Todo.remove({}).then(res => {
      expect(res.ok).to.equal(1);
    });
  });

  it("should add an item to database and assert with  a call to get request", () => {
    let postItem;
    return request(app)
      .post("/Todos")
      .send({ text: "Express text Nmoy2" }) // sends a JSON post body
      .expect(200)
      .then(res => {
        postItem = res.body;
        return request(app).get("/AllTodos");
      })
      .then(res => {
        // expect res.body which is arr of object to contain one object postItem.
        expect(res.body).to.deep.include(postItem);
      });
  });

  it("should add an item to database and then assert directly by calling database", () => {
    const text = "Choclates3";

    return request(app)
      .post("/Todos")
      .send({ text })
      .expect(200)
      .then(res => {
        expect(res.body.text).to.equal(text);
        return Todo.find();
      })
      .then(todos => {
        expect(todos).to.have.lengthOf(1);
        expect(todos[0]).to.have.property("text", text);
      });
  });

  it("should not add an item to db when no body is sent and then assert directly by calling database", () => {
    return request(app)
      .post("/Todos")
      .expect(400)
      .then(res => {
        expect(res.body.errors.text.message).to.equal("Path `text` is required.");
        return Todo.find();
      })
      .then(todos => {
        expect(todos).to.have.lengthOf(0);
        expect(todos).to.be.an('array').that.is.empty;
      });
  });
});
