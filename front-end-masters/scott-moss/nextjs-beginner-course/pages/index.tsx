/** @jsxImportSource theme-ui */

import { jsx } from "theme-ui";
import Link from "next/link";

export default ({ user, age, id }) => {
  console.log("user---", user);
  console.log("age---", age);
  console.log("id---", id);

  return (
    <div sx={{ height: `calc(100vh - 60px)` }}>
      <div
        sx={{
          variant: "containers.page",
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
      >
        <h1 sx={{ fontSize: 3, my: 0 }}>
          This is a really dope note taking app.
        </h1>
      </div>
    </div>
  );
};

export const getStaticProps = () => {
  return {
    props: {
      user: "sushi",
      age: 10,
      id: 4455,
    },
  };
};
