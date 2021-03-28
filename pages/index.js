import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "@components/Layouts/Layout";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gapyearly</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Layout>
      <main className={styles.main}>
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
        <button>Button</button>
        {/* button variations (i.e. background color) */}

        <div className="cardGallery">
          <div className={"card"}>
            <img
              className={"cardImg"}
              src="/images/placeholder.jpg"
              alt=""
            ></img>
            <div className={"cardDesc"}>
              <h3>Blog Title</h3>
              <p>Author Name</p>
            </div>
          </div>

          <div className={"card"}>
            <img
              className={"cardImg"}
              src="/images/placeholder.jpg"
              alt=""
            ></img>
            <div className={"cardDesc"}>
              <h3>Blog Title</h3>
              <p>Author Name</p>
            </div>
          </div>

          <div className={"card"}>
            <img
              className={"cardImg"}
              src="/images/placeholder.jpg"
              alt=""
            ></img>
            <div className={"cardDesc"}>
              <h3>Blog Title</h3>
              <p>Author Name</p>
            </div>
          </div>
        </div>


      </main>
      </Layout>
    </div>
  );
}
