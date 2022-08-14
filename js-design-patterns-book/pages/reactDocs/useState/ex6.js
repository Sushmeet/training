/*
Updating Objects and Arrays in State.

You can put objects and arrays into state. 

In React, state is considered read-only, so you 
should replace it rather than mutate your existing objects. 
For example, if you have a form object in state, don’t update it like this:

// 🚩 Don't mutate an object in state like this:
form.firstName = 'Taylor';

// instead replace it completely
setForm({
    ...form,
    firstName: 'taylor',
})

*/

/*
Example 1 of 4: Form (object)
In this example, the form state variable holds an object. 
Each input has a change handler that calls setForm with the next state of the entire form. 
The { ...form } spread syntax ensures that the state object is replaced rather than mutated.
*/

//  { ...form } spread syntax ensures that the state object is replaced rather than mutated.
import { useState } from "react";
const Example6 = () => {
  const [form, setForm] = useState({
    firstName: "Sush",
    lastname: "sunger",
    email: "sushi@gmail.com",
  });

  const firstNameChangeHandler = (e) =>
    setForm({
      ...form,
      firstName: e.target.value,
    });

  const lastNameChangeHandler = (e) =>
    setForm({
      ...form,
      lastname: e.target.value,
    });

  const emailChangeHandler = (e) =>
    setForm({
      ...form,
      email: e.target.value,
    });

  return (
    <div style={{ margin: "20px" }}>
      <label>
        First Name:{" "}
        <input value={form.firstName} onChange={firstNameChangeHandler} />
      </label>
      <br />
      <label>
        Last Name:{" "}
        <input value={form.lastname} onChange={lastNameChangeHandler} />
      </label>
      <br />
      <label>
        Email: <input value={form.email} onChange={emailChangeHandler} />
      </label>
      <p>
        {form.firstName} {form.lastname} {form.email}
      </p>
    </div>
  );
};

export default Example6;
