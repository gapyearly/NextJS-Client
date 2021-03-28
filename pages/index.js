import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "@components/Layouts/Layout";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gapyearly</title>
      </Head>
      <Layout>
        <h1 className={styles.title}>
          Welcome to <a href="/">Gapyearly!</a>
        </h1>
        <h2>H2 Text</h2>
        <h3>H3 Text</h3>
        <p>Paragraph Text</p>
        <form>
          <label>Form Label </label>
          <input placeholder={"Search..."} type="text"></input>
        </form>

        <div>
          <img src="/images/logo.png" alt=""></img>
        </div>

        <button>Button</button>
        {/* button variations (i.e. background color) */}
      </Layout>
    </div>
  );
}
