import { useUser } from "../hooks/useUser";

export default function SwrDemo() {
  const { data, error, isLoading } = useUser();

  if (error) return "An error has occurred.";
  if (isLoading) return <h1>Loading</h1>;
  return (
    <div>
      <h1>SWR DEMO</h1>
      <p>ID: {data.id}</p>
      <img src={data.organization.avatar_url} />
    </div>
  );
}
