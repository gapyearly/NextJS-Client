import strapi from "@api/strapi";
import Layout from "@components/Layouts/Layout";
import PageTitle from "@components/PageTitle";
import LinkGallery from "@components/MasonryGallery";
import Head from "next/head";
import MentorCard from "@components/MasonryGallery/MentorCard";

export default function Mentorship({ data }) {
  const cards = data.mentorCard.map(
    ({ fullName, school, summary, struggles }) => {
      return (
        <MentorCard
          key={fullName}
          school={school}
          summary={summary}
          struggles={struggles}
        ></MentorCard>
      );
    }
  );

  return (
    <>
      <Head>
        <title>Mentorship | Gapyearly</title>
      </Head>
      <PageTitle>Mentorship</PageTitle>
      <Layout>
        <LinkGallery> {cards}</LinkGallery>
      </Layout>
    </>
  );
}

export async function getStaticProps(ctx) {
  const { data } = await strapi.get("mentor-profile");
  return {
    props: {
      data,
    },
  };
}
