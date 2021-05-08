import Layout from "@components/Layouts/Layout";
import strapi from "@api/strapi";
import styles from "@components/MasonryGallery/BlogCard.module.css";
import BlogCard from "@components/MasonryGallery/BlogCard";
import PageTitle from "@components/PageTitle";
export default function Blog({ data }) {
  let index = 0;
  const cards = data.map((blogData) => {
    index += 1;
    const align = index % 2 === 0 ? "right" : "left";
    return <BlogCard key={blogData.slug} data={blogData} align={align} />;
  });
  // TODO: Add Search Bar
  return (
    <>
      <PageTitle title="Blog" />
      <Layout className={styles.margin}>{cards}</Layout>
    </>
  );
}

export async function getStaticProps(ctx) {
  const { data } = await strapi.get("blogs");
  return {
    props: {
      data,
    },
  };
}
