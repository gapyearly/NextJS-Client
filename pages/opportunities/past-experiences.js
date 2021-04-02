import React, { useState } from "react";
import Layout from "@components/Layouts/Layout";
import strapi from "@api/strapi";

import ExperienceGallery from "@components/MasonryGallery";
import ExperienceCard from "@components/MasonryGallery/ExperienceCard";
import PageTitle from "@components/Header";
import Modal from "@components/Modal";

export default function PastExperiences({ data }) {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalData, setModalData] = useState(null);

  const onClick = (data) => {
    setModalData(data);
    setModalVisibility(true);
  };
  console.log(modalData);
  const cards = data.map((experienceData) => {
    return (
      <ExperienceCard
        key={experienceData.slug}
        data={experienceData}
        onClick={onClick}
      />
    );
  });
  console.log(data);
  // TODO: Add Search Bar
  return (
    <>
      <PageTitle>Past Experiences</PageTitle>
      <Layout>
        <ExperienceGallery>{cards}</ExperienceGallery>
        <Modal
          show={modalVisibility}
          onClose={() => {
            setModalVisibility(false);
            setModalData(null);
          }}
        ></Modal>
      </Layout>
    </>
  );
}

const ModalContent = (data) => {
  return hey;
};

export async function getStaticProps(ctx) {
  const { data } = await strapi.get("experiences");
  return {
    props: {
      data,
    },
  };
}
