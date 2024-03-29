import Layout from "@components/Layouts/Layout";
import Button from "@components/Buttons/Button";
import btnstyles from "@components/Buttons/Button.module.css";
import styles from "@components/MasonryGallery/TeamCard.module.css";
import PageTitle from "@components/PageTitle";
import Link from "next/link";
import DashboardLayout from "@components/Layouts/DashboardLayout";
import strapi from "@api/strapi";
import TeamCard from "@components/MasonryGallery/TeamCard";
import { NextSeo } from "next-seo";

export default function OurTeam({ data }) {
  const cards = data.TeamMemberBio.map(({ fullName, image, bio, location }) => {
    return (
      <TeamCard
        key={fullName}
        fullName={fullName}
        image={image}
        bio={bio}
        location={location}
      />
    );
  });
  return (
    <>
      <PageTitle title="Meet Our Team" />
      <Layout>
        <p>
          We always say Gapyearly is made “for gappers, by gappers”… so, who are
          they? Our team is comprised of past and present gappers who are
          passionate about the benefits of gap years, among other things. You
          can get to know the team below, and if you’re interested in applying
          for a position you can do so{" "}
          <Link href="/about/join-the-team">here</Link>!
        </p>
        <div className={styles.teamContainer}>{cards}</div>
      </Layout>
    </>
  );
}
export async function getStaticProps(ctx) {
  const { data } = await strapi.get("our-team");
  return {
    props: {
      data,
    },
  };
}
