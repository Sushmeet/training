/* 
examples of slug page
so an example of slug routes

http://localhost:3000/blog/something   // cause i have [slug]


http://localhost:3000/blog/something/somethingmore   // cause i have [...slug]



use cookies to protect a route. middleware has access to cookies

*/

const delay = (time) => {
  console.log("time---", time);
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), time);
  });
};

const getDataFromCMS = (slug) => {
  return { name: "cms name" };
};

const getPost = async (slug) => {
  const post = await getDataFromCMS(slug);
  // const result = await delay(5000);
  return post;
};

export default async function BlogPost({
  params,
}: {
  params: { slug: string[] };
}) {
  const { slug } = params;
  const post = await getPost(slug);

  console.log("params---", slug);
  throw new Error("omg sush this is an error");
  return <h1>You hit the SLUG Page and u will see the slug {slug}</h1>;
}
