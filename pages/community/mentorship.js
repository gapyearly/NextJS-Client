import strapi from "@api/strapi";
import Layout from "@components/Layouts/Layout";
import PageTitle from "@components/PageTitle";
import LinkGallery from "@components/MasonryGallery";
import Head from "next/head";
import MentorCard from "@components/MasonryGallery/MentorCard";
import Title from "@components/Title";

export default function Mentorship({ data }) {
  console.log(data);
  let index = 0;
  const cards = data
    .filter((user) => user.mentorInfo && user.mentorInfo.approved)
    .map(
      ({
        firstName,
        mentorInfo,
        id,
        lastName,
        universityName,
        universityYear,
      }) => {
        index += 1;
        const bgColor =
          index % 4 === 0
            ? "red"
            : index % 4 === 1
            ? "yellow"
            : index % 4 === 2
            ? "green"
            : "blue";
        console.log(bgColor);
        return (
          <MentorCard
            key={id}
            firstName={firstName}
            lastName={lastName}
            universityName={universityName}
            universityYear={universityYear}
            selfFunded={mentorInfo.selfFunded}
            summary={mentorInfo.summary}
            struggles={mentorInfo.struggles}
            bgColor={bgColor}
          ></MentorCard>
        );
      }
    );

  return (
    <>
      <Head>
        <Title>Mentorship</Title>
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
