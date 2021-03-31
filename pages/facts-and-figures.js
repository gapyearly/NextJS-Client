import Layout from "@components/Layouts/Layout";
import strapi from "@api/strapi";
import LinkGallery from "@components/LinkGallery";
import LinkCard from "@components/LinkGallery/LinkCard";
import Link from "next/link";
export default function FactsAndFigures({ data }) {
  const cards = data.factCard.map(
    ({ url, description, title, organization }) => {
      return (
        <LinkCard
          key={title}
          href={url}
          desc={description}
          title={title}
          source={organization}
        />
      );
    }
  );
  return (
    <Layout>
      <LinkGallery>{cards}</LinkGallery>
    </Layout>
  );
}

export async function getStaticProps(ctx) {
  const { data } = await strapi.get("facts-and-figures");
  return {
    props: {
      data,
    },
  };
}
