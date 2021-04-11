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

      <PageTitle>Welcome to Gapyearly!</PageTitle>

      <Layout>
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
