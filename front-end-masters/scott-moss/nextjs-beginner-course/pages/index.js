// export default () => <h1>hello</h1>;
import Link  from "next/link";

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <p>welcome to the home page</p>
      <Link href="/docs">
        <a>go to docs</a>
      </Link>
      <hr></hr>
      <Link href="/notes">
        <a>go to notes</a>
      </Link>
    </>
  );
};

export default Home;
