import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  console.log("router.query----", router);
  const { id } = router.query;
  return (
    <>
      <h1>NOTES DYNAMIC PAGE</h1>
      <p>
        Welcome to <em>{id}</em> note
      </p>
    </>
  );
};
