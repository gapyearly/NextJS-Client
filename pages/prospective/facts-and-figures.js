import Layout from "@components/Layouts/Layout";
import strapi from "@api/strapi";
import LinkGallery from "@components/MasonryGallery";
import LinkCard from "@components/MasonryGallery/FactsFiguresCard";
import PageTitle from "@components/PageTitle";
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
      <Head>
        <title>Facts and Figures | Gapyearly</title>
      </Head>
      <PageTitle>Facts and Figures</PageTitle>
      <Layout>
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
