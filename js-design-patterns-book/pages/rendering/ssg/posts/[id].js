const baseURL = "https://jsonplaceholder.typicode.com";

export const getStaticPaths = async () => {
  // so let's get all the posts.
  // then get the id's from it and what store it
  // in an array.

  const response = await fetch(`${baseURL}/posts`);
  const products = await response.json();
  const paths = products.map((product) => {
    return { params: { id: product.id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const response = await fetch(`${baseURL}/posts/${params.id}`);
  const productInfo = await response.json();
  const { id, userId, title, body } = productInfo;
  return {
    props: {
      id,
      userId,
      title,
      body,
    },
  };
};

const Posts = ({ id, userId, title, body }) => {
  return (
    <>
      <h1>This is stuff for post id {id}</h1>
      <h2>id {id}</h2>
      <h2>userId: {userId}</h2>
      <h2>title: {title}</h2>
      <h2>body: {body}</h2>
    </>
  );
};

export default Posts;
