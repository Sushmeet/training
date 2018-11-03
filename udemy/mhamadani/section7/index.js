const mongoose = require("mongoose");
const debug = require("debug");

mongoose
  .connect(
    "mongodb://localhost:27017/myapp",
    {
      useNewUrlParser: true
    }
  )
  .then(() => console.log("Connected to mongo DB connection"))
  .catch(err => console.error("cannot connect to database", err));

// Create a schema. Think of it like in a database table. we create the schema of the table.
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean
});


// create the Course classs with courseSchema
const Course = mongoose.model('Course', courseSchema);

async function createCourse({ name, author, tags, isPublished}) {
  const course = new Course({
      name,
      author,
      tags,
      isPublished,
    });

  const result = await course.save();
  console.log(result);
  return result
}


const courseBody = {
  name: "goluu",
  author: "nakiii",
  tags: ['author12', 'broker12'],
  isPublished: true
}
// const result =  await createCourse();

createCourse(courseBody);
