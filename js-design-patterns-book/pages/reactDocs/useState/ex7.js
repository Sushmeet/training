// sfc

/*
Example 2 of 4: Form (nested object)
In this example, the state is more nested. 
When you update nested state, you need to create a copy 
of the object you’re updating, as well as any objects “containing” it on the way upwards. 
Read updating a nested object to learn more.
*/

import { useState } from "react";
import Image from "next/image";

const Example7 = () => {
  const [person, setForm] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  const nameChangeHandler = (e) =>
    setForm({
      ...person,
      name: e.target.value,
    });

  const titleChangeHandler = (e) =>
    setForm({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });

  const cityChangeHandler = (e) =>
    setForm({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value,
      },
    });

  const imageChangeHandler = (e) =>
    setForm({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value,
      },
    });

  return (
    <div style={{ margin: "20px" }}>
      <label>
        Name:
        <input value={person.name} onChange={nameChangeHandler} />
      </label>
      <br />
      <label>
        Title:
        <input value={person.artwork.title} onChange={titleChangeHandler} />
      </label>
      <br />
      <label>
        City:
        <input value={person.artwork.city} onChange={cityChangeHandler} />
      </label>
      <br />
      <label>
        Image:
        <input value={person.artwork.image} onChange={imageChangeHandler} />
      </label>
      <p>
        {person.artwork.title} by {person.name}
      </p>
      <p>(located in {person.artwork.city})</p>
      <img src={person.artwork.image} alt="image of a city" />
      {/* <Image src={person.artwork.image} alt="image of a city" layout="fill" /> */}
    </div>
  );
};

export default Example7;
