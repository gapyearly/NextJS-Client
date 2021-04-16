import styles from "@components/MasonryGallery/PastExperienceCard.module.css";
import Link from "next/link";
import Pill from "@components/Buttons/Pill.js";

export default function ParentReflectionModalContent({ data }) {
  if (!data) return;
  console.log(data);
  const {
    title,
    parentFullName,
    childFullName,
    slug,
    image,
    author,
    content,
    description,
  } = data;

  // const fullName = `${author.personalInfo.firstName} ${author.personalInfo.lastName}`;
  return (
    <div className={styles.modal}>
      <h2>{title}</h2>
      {/* <div className={styles.imgParent}>
        <img src={image.url} alt={image.alt} />
      </div> */}
      <h3>
        By: {parentFullName}, parent of {childFullName}
      </h3>
      <p>{content}</p>
    </div>
  );
}
