import React, { useState } from "react";
import Layout from "@components/Layouts/Layout";
import strapi from "@api/strapi";

import styles from "@components/MasonryGallery/PastExperienceCard.module.css";

import Pill from "@components/Buttons/Pill.js";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

import ExperienceGallery from "@components/MasonryGallery";
import ExperienceCard from "@components/MasonryGallery/ExperienceCard";
import ExperienceModalContent from "@components/MasonryGallery/ExperienceModalContent";
import PageTitle from "@components/PageTitle";
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
