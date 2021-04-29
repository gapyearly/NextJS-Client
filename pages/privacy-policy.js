import Layout from "@components/Layouts/Layout";
import Button from "@components/Buttons/Button";
import btnstyles from "@components/Buttons/Button.module.css";
import styles from "@components/Forms/form.module.css";
import PageTitle from "@components/PageTitle";
import Head from "next/head";
import Title from "@components/Title";

export default function Contact() {
  return (
    <>
      <Head>
        <Title>Contact</Title>
      </Head>
      <PageTitle>Contact</PageTitle>
      <Layout></Layout>
    </>
  );
}
