import strapi from "@api/strapi";
import Layout from "@components/Layouts/Layout";
import PageTitle from "@components/PageTitle";
import LinkGallery from "@components/MasonryGallery";
import Head from "next/head";
import MentorCard from "@components/MasonryGallery/MentorCard";
import Title from "@components/Title";
import shuffle from "@util/shuffleArray";

export default function Mentorship({ data }) {
  let index = 0;
  const cards = data
    .filter((user) => user.mentorInfo && user.mentorInfo.approved)
    .map((user) => {
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
        <MentorCard key={user.id} user={user} bgColor={bgColor}></MentorCard>
      );
    });
  shuffle(cards);
  return (
    <>
      <PageTitle title="Mentorship Team" />
      <Layout className="galleryWidth">
        <h2>
          We’re a group of students who have recently been in your shoes… We
          know firsthand what kinds of questions you are working through and are
          here to help, so shoot! We promise to respond in 48 hours, FREE of
          charge. Browse through our profiles and request a specific mentor, or
          ask general questions to any of us!
        </h2>

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
