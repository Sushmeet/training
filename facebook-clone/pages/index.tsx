import Head from "next/head";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>FaceBook Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* app structure */}
      <Header />
      {/* Main
        Side bar
        Feed
        Widgets
      Body */}
      {/* Footer body */}
    </div>
  );
}