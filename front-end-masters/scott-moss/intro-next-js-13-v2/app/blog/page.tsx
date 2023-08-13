export async function getStaticParams() {
  return [{ slug: "happy" }, { slug: "sad" }, { blood: "siri" }];
}

export default function Blog() {
  return <h1>You hit the Blog Home</h1>;
}
