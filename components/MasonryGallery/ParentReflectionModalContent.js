import styles from "@components/MasonryGallery/PastExperienceCard.module.css";
import ModalStyles from "@components/Modal.module.css";
import Link from "next/link";
import Pill from "@components/Buttons/Pill.js";
import RichText from "@components/Sections/RichText.js";
export default function ParentReflectionModalContent({ data }) {
  if (!data) return;
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
      <h3 className={ModalStyles.nameCitation}>
        – {parentFullName}, parent of {childFullName}
      </h3>
      <RichText data={content} />
    </div>
  );
}
