import Layout from "@components/Layouts/Layout";
import strapi from "@api/strapi";

export default function FactsAndFigures({ data }) {
  console.log(data);
  return <Layout></Layout>;
}

export async function getStaticProps(ctx) {
  const data = await strapi.get("facts-and-figures");
  return {
    props: {
      data,
    },
  };
}
