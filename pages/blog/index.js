import Layout from "@components/Layouts/Layout";
import strapi from "@api/strapi";
import BlogGallery from "@components/MasonryGallery";
import BlogCard from "@components/MasonryGallery/BlogCard";
import PageTitle from "@components/Header";
export default function Blog({ data }) {
  const cards = data.map((blogData) => {
    return <BlogCard key={blogData.slug} data={blogData} />;
  });
  // TODO Add Search Bar
  return (
    <>
      <PageTitle>Blog</PageTitle>
      <Layout>
        <BlogGallery>{cards}</BlogGallery>
      </Layout>
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
