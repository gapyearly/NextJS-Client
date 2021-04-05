import strapi from "@api/strapi";

export default function Article() {
  return <div></div>;
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

export async function getStaticPaths() {
  // Get all pages from Strapi
  const { data: pages } = await strapi.get("blogs");

  const paths = pages.map((page) => {
    // Decompose the slug that was saved in Strapi
    const slugArray = page.slug.split("/");
    return {
      params: { slug: slugArray },
    };
  });
  return { paths, fallback: false };
}
