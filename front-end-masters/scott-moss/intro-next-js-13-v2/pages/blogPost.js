const fetchRedditData = async () => {
  const data = await fetch("https://www.reddit.com/.json");
  return data.json();
};

export const getServerSideProps = async () => {
  const result = await fetch("http://localhost:3000/api/user/userInfo");
  const user = await result.json();
  // console.log("user---", user);

  const result2 = await fetchRedditData();
  const topic = result2?.data.children[0].data.title;

  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const repo = await res.json();

  return { props: { user, topic, repo } };
};

export default function BlogPost({ user, topic, repo }) {
  // console.log("user2222---", user);
  //   console.log("topic---", topic);
  //   console.log("repo---", repo);

  return <div>blogPost</div>;
}
