import strapi from "@api/strapi";
import Layout from "@components/Layouts/Layout";
import RichText from "@components/Sections/RichText";

export default function BlogPost({ blogData }) {
  const { content } = blogData;
  return (
    <Layout>
      <RichText data={content}></RichText>
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
