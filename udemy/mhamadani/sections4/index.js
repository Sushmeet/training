const express = require("express");
const Joi = require("joi");
const app = express();

const PORT = process.env.PORT || 8900;
const hostName = "localhost";

app.use(express.json());

const validation = body => {
  const schema = {
    id: Joi.number().required(),
    name: Joi.string()
      .min(3)
      .required()
  };
  return Joi.validate(body, schema);
};

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" }
];

app.get("/api/courses/", (req, res) => {
  res.send(courses);
});

// route paramerter for required stuff
// /:year/:month route parameter
app.get("/api/courses/:id", (req, res) => {
  const course = courses.find(course => course.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("No such course found");
  res.send(course);
});

app.post("/api/courses/", (req, res) => {
  const { error } = validation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const course = {
    id: req.body.id,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

app.put;

app.listen(8900, hostName, () => {
  console.log(`Server has Started on port ${PORT}`);
});

app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(course => course.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('No course found to update');

    const { error } = validation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    course.name = 'edited name';
    res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(course => course.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('No course found to update');

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});