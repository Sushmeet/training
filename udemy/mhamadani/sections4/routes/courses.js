const express = require("express");
const router = express.Router();
const Joi = require("joi");


const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" }
];

const validation = body => {
  const schema = {
    id: Joi.number().required(),
    name: Joi.string()
      .min(3)
      .required()
  };
  return Joi.validate(body, schema);
};

router.get("/", (req, res) => {
  res.send(courses);
});

// route paramerter for required stuff
// /:year/:month route parameter
router.get("/:id", (req, res) => {
  const course = courses.find(course => course.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("No such course found");
  res.send(course);
});

router.post("/", (req, res) => {
  const { error } = validation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const course = {
    id: req.body.id,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

router.put("/:id", (req, res) => {
  const course = courses.find(course => course.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("No course found to update");

  const { error } = validation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  course.name = "edited name";
  res.send(course);
});

router.delete("/:id", (req, res) => {
  const course = courses.find(course => course.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("No course found to update");

  const index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(course);
});

module.exports = router;
