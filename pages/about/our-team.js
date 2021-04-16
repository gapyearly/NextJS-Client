import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Layout from "@components/Layouts/Layout";
import PageTitle from "@components/PageTitle";
import Title from "@components/Title";
import Button from "@components/Buttons/Button.js";
import Pill from "@components/Buttons/Pill.js";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <Title>Home</Title>
      </Head>

      <PageTitle>Welcome to Gapyearly!</PageTitle>

      <Layout>
        <h2>
          We always say Gapyearly is made “for gappers, by gappers”… so, who are
          they? Our team is comprised of past and present gappers who are
          passionate about the benefits of gap years, among other things. You
          can get to know the team below, and if you’re interested in applying
          for a position you can do so <Link href="/join-the-team">here</Link>!
        </h2>
        <div>
          <img src="/"></img>
          <h3></h3>
          <h4></h4>
          <p></p>
        </div>
      </Layout>
    </div>
  );
}
