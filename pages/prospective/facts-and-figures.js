import Layout from "@components/Layouts/Layout";
import strapi from "@api/strapi";
import LinkGallery from "@components/MasonryGallery";
import LinkCard from "@components/MasonryGallery/FactsFiguresCard";
import PageTitle from "@components/PageTitle";
import Title from "@components/Title";
import Head from "next/head";
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
    <>
      <PageTitle title="Facts and Figures" />
      <Layout className="galleryWidth">
        <h2>
          Still on the fence? Get cold, hard facts on how gap years help all
          students.
        </h2>
        <LinkGallery>{cards}</LinkGallery>
      </Layout>
    </>
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
