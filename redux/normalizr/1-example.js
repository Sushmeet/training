const { normalize, schema } = require("normalizr");
const originalData = require("./data.js");

// user schema
const user = new schema.Entity("users");
// comments schema
const comment = new schema.Entity("commenter", { commenter: user });
// article shcema

const article = new schema.Entity("articles", {
  author: user,
  comments: [comment],
});

console.log("originaldata-------", JSON.stringify(originalData, 0, 2));
const normalizedData = normalize(originalData, article);
console.log("normalizedData----", JSON.stringify(normalizedData, 0, 2));



/*
normalizedData---- {
  "entities": {
    "users": {
      "1": {
        "id": "1",
        "name": "Paul"
      },
      "2": {
        "id": "2",
        "name": "Nicole"
      }
    },
    "commenter": {
      "324": {
        "id": "324",
        "commenter": "2"
      }
    },
    "articles": {
      "123": {
        "id": "123",
        "author": "1",
        "title": "My awesome blog post",
        "comments": [
          "324"
        ]
      }
    }
  },
  "result": "123"
}
*/