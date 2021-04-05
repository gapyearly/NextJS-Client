import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "@components/Layouts/Layout";
import PageTitle from "@components/PageTitle";
import Title from "@components/Title";
import Button from "@components/Buttons/Button.js";
import Pill from "@components/Buttons/Pill.js";
import Modal from "@components/Modal.js";
import LinkGallery from "@components/MasonryGallery";
import { FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <Title>Home</Title>
      </Head>

      <PageTitle>Welcome to Gapyearly!!!!</PageTitle>

      <Layout>
        <h2>H2 Text</h2>
        <h3>H3 Text</h3>
        <p>Paragraph Text</p>
        <FaInstagram></FaInstagram>
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

          <Button color="blueBg" href="gapyearly.com">
            Submit
          </Button>
          <br></br>
          <Pill color="blueBg" href="">
            Pill style
          </Pill>
          <Pill color="redBg" href="">
            Pill style
          </Pill>
          <Pill color="greenBg" href="">
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
      </Layout>
    </div>
  );
}
