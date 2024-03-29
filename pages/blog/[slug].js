import strapi from "@api/strapi";
import Layout from "@components/Layouts/Layout";

import PageTitle from "@components/PageTitle";
import RichText from "@components/Sections/RichText";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import styles from "@styles/Blog.module.css";

export default function BlogPost({ blogData }) {
  const { content, title, author, description, submittedBy } = blogData;
  const name = {};
  if (author) {
    name.name = `${author.firstName} ${author.lastName}`;
  } else {
    name.name = submittedBy;
  }

  return (
    <Layout className="article">
      <Link href="/blog" passHref>
        <div className={styles.clickable}>
          <FaArrowLeft size="13" /> <a>Back to all posts</a>
        </div>
      </Link>
      <article>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.author}>By {name.name}</h2>
        <RichText data={content}></RichText>
      </article>
      <Link href="/blog" passHref>
        <div className={styles.clickable}>
          <FaArrowLeft size="13" /> <a>Back to all posts</a>
        </div>
      </Link>
      <form></form>
      <br></br>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  // We have the required page data, pass it to the page component
  const { data } = await strapi.get(`/blogs?slug=${params.slug}`);

  return {
    props: {
      blogData: data[0],
    },
  };
}

export async function getStaticPaths() {
  // Get all pages from Strapi
  const { data } = await strapi.get("blogs");
  const paths = data.map((blog) => {
    return {
      params: { slug: blog.slug },
    };
  });
  return { paths, fallback: false };
}
