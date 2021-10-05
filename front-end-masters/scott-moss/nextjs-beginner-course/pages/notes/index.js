import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../components/styles.module.css";



export default () => {
  const router = useRouter();
  return (
    <>
      <h1>Notes Page</h1>
      <Link href="/notes/[id]" as={`/notes/1`}>
        <a>Note 1</a>
      </Link>
      <hr></hr>
      <div>
        <button className={styles.button} onClick={() => router.push("/")}>
          Go Home
        </button>
      </div>
      <hr></hr>
      <button onClick={() => router.push("/notes/[id]", `/notes/5`)}>
        Click on note 5
      </button>
    </>
  );
};
