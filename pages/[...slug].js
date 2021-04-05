import strapi from "@api/strapi";
import RichText from "@components/Sections/RichText";
import Layout from "@components/Layouts/Layout";

const DynamicPage = ({ pageInfo }) => {
  const { pageContents } = pageInfo;
  console.log(pageContents);
  return (
    <Layout>
      <RichText data={pageContents[0].content} />
    </Layout>
  );
};

export async function getStaticPaths() {
  // Get all pages from Strapi
  const { data: pages } = await strapi.get("/pages");
  const validPaths = pages.filter((page) => {
    return !page.customPage;
  });
  const paths = validPaths.map((page) => {
    // Decompose the slug that was saved in Strapi
    const slugArray = page.slug.split("/");
    return {
      params: { slug: slugArray },
    };
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // We have the required page data, pass it to the page component
  const fullSlug = params.slug.join("/");
  const { data: page } = await strapi.get(`/pages?slug=${fullSlug}`);

  return {
    props: {
      pageInfo: page[0],
    },
  };
}

export default DynamicPage;
