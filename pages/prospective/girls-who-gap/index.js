import Layout from "@components/Layouts/Layout";
import ReactHtmlParser from "react-html-parser";
import styles from "@styles/Blog.module.css";
import PageTitle from "@components/PageTitle";
import strapi from "@api/strapi";
import Head from "next/head";
import Title from "@components/Title";
import Link from "next/link";

import getProfileURL from "@util/profileURL";
export default function GirlsWhoGap({ data }) {
  const list = data.map((gwgData) => {
    const { title, description, slug, author, profile, submittedBy } = data;

    const name = {};
    if (gwgData.author) {
      name.name = `${gwgData.author.firstName} ${gwgData.author.lastName}`;
      name.user = true;
    } else {
      name.name = gwgData.submittedBy;
      name.user = false;
    }

    return (
      <>
        <h3 key={gwgData.slug}>
          <Link href={`/prospective/girls-who-gap/${gwgData.slug}`}>
            <a className="noUnderline">{gwgData.title}</a>
          </Link>
        </h3>
        <h4>
          by{" "}
          {name.user ? (
            <Link href={getProfileURL(author)}>
              <a>{name.name}</a>
            </Link>
          ) : (
            <span>{name.name}</span>
          )}
        </h4>
      </>
    );
  });
  return (
    <>
      <PageTitle title="Girls Who Gap" />
      <Layout>
        <h2>
          {" "}
          It can be especially daunting to travel alone as a girl; parents may
          also feel much more nervous about letting their daughters go to
          foreign countries. Despite initial fears, female gappers and their
          parents across the board speak to the strength, confidence, and
          leadership girls gain through taking charge of their lives for a year.
        </h2>
        <h2>
          We've gathered a few reflections that you could use as resources while
          making your choice!
        </h2>
        <div className={styles.reflectionContainer}>{list}</div>
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
