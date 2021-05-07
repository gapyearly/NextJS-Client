import React, { useState, useEffect } from "react";
import Layout from "@components/Layouts/Layout";
import strapi from "@api/strapi";

import { useRouter } from "next/router";

import Pill from "@components/Buttons/Pill.js";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

import Head from "next/head";
import Title from "@components/Title";
import ExperienceGallery from "@components/MasonryGallery";
import ExperienceCard from "@components/MasonryGallery/ExperienceCard";
import ExperienceModalContent from "@components/MasonryGallery/ExperienceModalContent";
import PageTitle from "@components/PageTitle";
import Modal from "@components/Modal";

export default function PastExperiences({ data }) {
  const router = useRouter();
  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalData, setModalData] = useState(null);
  const { experience } = router.query;
  useEffect(() => {
    if (router.isReady) {
      const experienceModalContent = data.find((experienceData) => {
        return experienceData.slug === experience;
      });
      if (experienceModalContent) onClick(experienceModalContent);
    }
  }, [router]);
  const onClick = (data) => {
    setModalData(data);
    setModalVisibility(true);
  };
  const cards = data.map((experienceData) => {
    return (
      <ExperienceCard
        key={experienceData.slug}
        data={experienceData}
        onClick={onClick}
      />
    );
  });
  // TODO: Add Search Bar
  return (
    <>
      <Head>
        <Title>Past Experiences</Title>
      </Head>
      <PageTitle>Past Experiences</PageTitle>
      <Layout className="galleryWidth">
        <ExperienceGallery>{cards}</ExperienceGallery>
        <Modal
          show={modalVisibility}
          onClose={() => {
            setModalVisibility(false);
            setModalData(null);
          }}
        >
          <ExperienceModalContent data={modalData} />
        </Modal>
      </Layout>
    </>
  );
}

export async function getStaticProps(ctx) {
  const { data } = await strapi.get("experiences");
  return {
    props: {
      data,
    },
  };
}
