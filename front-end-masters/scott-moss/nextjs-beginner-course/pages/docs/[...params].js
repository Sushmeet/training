import { useRouter } from "next/router";

const CatchALL = () => {
  const router = useRouter();
  const { params } = router.query;
  return (
    <>
      <h1>Catch ALl page</h1>
      <p>this is good paragraph look at params <em>{params}</em></p>
    </>
  );
};

export default CatchALL;
