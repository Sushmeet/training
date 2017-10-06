const express = require('express');
var request = require("supertest");

describe('app' , () => {
  it('should emit "mount" when mounted', (done) => {
    var blog = express()
    ,   app = express();
  })
})

describe(".use(app)", function() {
  it("should mount the app", function(done) {
    var blog = express(),
      app = express();

    blog.get("/blog", function(req, res) {
      res.end("blog");
    });

    app.use(blog);

    request(app)
      .get("/blog")
      .expect("blog", done);
  });
});
