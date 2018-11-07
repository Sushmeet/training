const mongooseConn = require("./mongooseConn");
const Course = require("./models/courses");

const course = new Course({
  name: "Comp 166",
  price: 15
});

/*
eq equal
ne notEqual
gt greaterThan
lt lessThan
gte greater than or equal to
lte less than or equal to
*/

// course
//   .save()
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => console.error("err", err));

// If you want to update a Course
// Course.update({ name: 'Comp 409'}, { price: 25 })
//       .then(res => console.log(res));


// Find a course which is greater than 15 and less than 30.
// Course.find({ price: { $gt: 15, $lt: 30 } }).then(res => console.log(res));


// if you want a course whose name is Comp 409 and price is 25.
Course.find()
      .and([{ name: 'Comp 409' }, { price: 25}])
      .select({name: 1}) // if you only want name.
      .then(res => console.log(res));


// Course.deleteOne({ name: 'Comp 409'}).then(res => console.log(res));
