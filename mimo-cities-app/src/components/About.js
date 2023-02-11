import React from "react";

export const About = () => {
  // This function createElement return a React element.
  // React elements are plain old javascript objects.
  const element = React.createElement("p", { id: "hello" }, "Hello World!");
  const element2 = React.createElement("h1", {
    id: "header",
    children: "Hellow Header",
  });

  console.log("element--", element);
  console.log("element2--", element2);

  return <div>About</div>;
};
