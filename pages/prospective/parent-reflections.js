import React, { useState } from "react";
import Layout from "@components/Layouts/Layout";
import strapi from "@api/strapi";
import styles from "@components/MasonryGallery/PastExperienceCard.module.css";

import Pill from "@components/Buttons/Pill.js";

import Gallery from "@components/MasonryGallery";
import ParentReflectionCard from "@components/MasonryGallery/ParentReflectionCard";
import ParentReflectionModalContent from "@components/MasonryGallery/ParentReflectionModalContent";
import PageTitle from "@components/PageTitle";
import Modal from "@components/Modal";

export default function ParentReflections({ data }) {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalData, setModalData] = useState(null);

  const onClick = (data) => {
    setModalData(data);
    setModalVisibility(true);
  };
  console.log(modalData);
  const cards = data.map((parentReflectionData) => {
    return (
      <ParentReflectionCard
        key={parentReflectionData.slug}
        data={parentReflectionData}
        onClick={onClick}
      />
    );
  });
  // TODO: Add Search Bar
  return (
    <>
      <PageTitle>Parent Reflections</PageTitle>
      <Layout>
        <Gallery>{cards}</Gallery>
        <Modal
          show={modalVisibility}
          onClose={() => {
            setModalVisibility(false);
            setModalData(null);
          }}
        >
          <ParentReflectionModalContent data={modalData} />
        </Modal>
      </Layout>
    </>
  );
}

export async function getStaticProps(ctx) {
  const { data } = await strapi.get("parent-reflections");
  return {
    props: {
      data,
    },
  };
}
