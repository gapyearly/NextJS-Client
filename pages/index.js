import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "@components/Layouts/Layout";
import Button from "@components/Buttons/Button.js";
import Pill from "@components/Buttons/Pill.js";
import LinkGallery from "@components/LinkGallery.js";

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
          <LinkGallery />
          <form>
            <label>
              Form Label
              <input placeholder={"Search..."} type="text"></input>
            </label>

            <label>
              <input type="radio" name="subscribe" value="yes"></input>Yes
            </label>
            <label>
              <input type="radio" name="subscribe" value="no"></input>No
            </label>

            <label>
              <input type="checkbox" name="permission"></input>Yes, I agree!!!
            </label>
    
            <Button color="blueBg" link="gapyearly.com">
              Submit
            </Button>
            <br></br>
            <Pill color="blueBg" link="">
              Pill style
            </Pill>
            <Pill color="redBg" link="">
              Pill style
            </Pill>
            <Pill color="greenBg" link="">
              Pill style
            </Pill>
          </form>

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
