const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const database = "TodoApp";
// const collection = "Todos";

MongoClient.connect(`mongodb://localhost:27017/${database}`, (err, client) => {
  if (err) {
    return console.log("Unable to connect to Mongo DB");
  }
  console.log("Connected to mongo db server");

  const db = client.db(database);

  // db.collection('Todos').insertOne(
  //   {
  //     text: "Something to do",
  //     completed: false
  //   },
  //   (err, result) => {
  //     if (err) {
  //       console.log("error in inserting to collection", err);
  //     } else {
  //       console.log(result.ops);
  //     }
  //   }
  // );

  db.collection("Users").insertOne(
    {
      name: "nance",
      age: 2,
      location: "Portland"
    },
    (err, result) => {
      if (err) {
        console.log("error in inserting collection.");
      } else {
        console.log(result.ops);
      }
    }
  );

  // Insert new Doc into Users with name , age location

  client.close();
});
