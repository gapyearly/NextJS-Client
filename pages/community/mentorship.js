import strapi from "@api/strapi";
import Layout from "@components/Layouts/Layout";
import PageTitle from "@components/PageTitle";
import LinkGallery from "@components/MasonryGallery";
import Head from "next/head";
import MentorCard from "@components/MasonryGallery/MentorCard";

export default function Mentorship({ data }) {
  console.log(data);
  const cards = data.map(({ personalInfo, mentorInfo, id }) => {
    let index = 0;
    index += 1;
    const bgColor =
      index % 4 === 0
        ? "red"
        : index % 4 === 1
        ? "yellow"
        : index % 4 === 2
        ? "green"
        : "blue";

    return (
      <MentorCard
        key={id}
        firstName={personalInfo.firstName}
        lastName={personalInfo.lastName}
        universityName={personalInfo.universityName}
        universityYear={personalInfo.universityYear}
        selfFunded={mentorInfo.selfFunded}
        summary={mentorInfo.summary}
        struggles={mentorInfo.struggles}
        bgColor={bgColor}
      ></MentorCard>
    );
  });

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
  const { data } = await strapi.get("users");
  return {
    props: {
      data,
    },
  };
}
