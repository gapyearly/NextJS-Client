import styles from "./Preview.module.css";
import Link from "next/link";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import {
  CostComponent,
  CategoryComponent,
} from "@components/MasonryGallery/ExperienceCard";
export default function ExperiencePreview({ data }) {
  const {
    author,
    submittedBy,
    title,
    location,
    funRating,
    slug,
    image,
    category,
    cost,
  } = data;
  const name = {};
  if (author) {
    name.name = `${author.firstName} ${author.lastName}`;
    name.user = true;
  } else {
    name.name = submittedBy;
    name.user = false;
  }

  return (
    <div className={styles.experiencePreviewContainer}>
      <img src={image.url} alt={image.alt} />
      <div className={styles.previewText}>
        <h3>{title}</h3>

        <p className={styles.location}>
          <FaMapMarkerAlt></FaMapMarkerAlt> {location}
        </p>

        <span>{CategoryComponent(category)}</span>
        <Link href="/">Read more...</Link>
        {/* AAAAAA slug */}
      </div>
    </div>
  );
}
