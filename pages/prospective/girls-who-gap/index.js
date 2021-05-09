import Layout from "@components/Layouts/Layout";
import ReactHtmlParser from "react-html-parser";
import styles from "styles/Accordion.module.css";
import PageTitle from "@components/PageTitle";
import strapi from "@api/strapi";
import Head from "next/head";
import Title from "@components/Title";
import Link from "next/link";
export default function GirlsWhoGap({ data }) {
  console.log(data);
  const list = data.map((gwgData) => {
    const { title, description, slug, author, profile, submittedBy } = data;

    const name = {};
    if (gwgData.author) {
      name.name = `${gwgData.author.firstName} ${gwgData.author.lastName}`;
      name.user = true;
    } else {
      name.name = submittedBy;
      name.user = false;
    }
    console.log(gwgData.author);
    console.log(name.name);
    return (
      <li key={gwgData.slug}>
        <Link href={`/prospective/girls-who-gap/${gwgData.slug}`}>
          <a>{name.name}</a>
        </Link>
      </li>
    );
  });
  return (
    <>
      <PageTitle title="Girls Who Gap" />
      <Layout>
        dasd
        <ul>{list}</ul>
      </Layout>
    </>
  );
}

export async function getStaticProps(ctx) {
  const { data } = await strapi.get("girls-who-gaps");
  return {
    props: {
      data,
    },
  };
}
