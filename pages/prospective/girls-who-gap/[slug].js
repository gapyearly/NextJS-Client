import strapi from "@api/strapi";
import Layout from "@components/Layouts/Layout";

import PageTitle from "@components/PageTitle";
import RichText from "@components/Sections/RichText";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import styles from "@styles/Blog.module.css";

export default function GWGReflection({ gwgData }) {
  const { content, title, author, profile, submittedBy } = gwgData;
  const name = {};
  if (author) {
    name.name = `${author.firstName} ${author.lastName}`;
    name.user = true;
  } else {
    name.name = submittedBy;
    name.user = false;
  }

  return (
    <Layout className="article">
      <Link href="/prospective/girls-who-gap" passHref>
        <div className={styles.clickable}>
          <FaArrowLeft size="13" /> <a>Back to all reflections</a>
        </div>
      </Link>
      <article>
        <h1 className={styles.title}>{title}</h1>
        <div>
          By{" "}
          {name.user ? (
            <Link href={`/${profile}`}>
              <a>{name.name}</a>
            </Link>
          ) : (
            <span>{name.name}</span>
          )}
        </div>
        <RichText data={content}></RichText>
      </article>
      <Link href="/prospective/girls-who-gap" passHref>
        <div className={styles.clickable}>
          <FaArrowLeft size="13" /> <a>Back to all reflections</a>
        </div>
      </Link>
      <form></form>
      <br></br>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  // We have the required page data, pass it to the page component
  const { data } = await strapi.get(`/girls-who-gaps?slug=${params.slug}`);

  return {
    props: {
      gwgData: data[0],
    },
  };
}

export async function getStaticPaths() {
  // Get all pages from Strapi
  const { data } = await strapi.get("girls-who-gaps");
  const paths = data.map((gwg) => {
    return {
      params: { slug: gwg.slug },
    };
  });
  return { paths, fallback: false };
}
