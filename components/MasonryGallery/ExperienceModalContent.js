import {
  CostComponent,
  CategoryComponent,
  StarsComponent,
} from "./ExperienceCard";
import styles from "@components/MasonryGallery/PastExperienceCard.module.css";
import Link from "next/link";
import Pill from "@components/Buttons/Pill.js";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

export default function ModalContent({ data }) {
  if (!data) return;
  console.log(data);
  const {
    cost,
    author,
    category,
    personalGrowthRating,
    dayToDayExperiences,
    lessonsLearned,
    activitiesDone,
    location,
    title,
    tips,
    funRating,
    links,
    memorableMoment,
    image,
    submittedBy,
  } = data;

  const linkArray = links.map(({ href }) => {
    return (
      <Link href={href} key={href}>
        <li>
          <a href={href}>{href}</a>
        </li>
      </Link>
    );
  });
  // const fullName = `${author.personalInfo.firstName} ${author.personalInfo.lastName}`;
  return (
    <div className={styles.modal}>
      <h2>{title}</h2>
      <div className={styles.imgParent}>
        <img src={image.url} alt={image.alt} />
      </div>

      <h3>Submitted by:</h3>
      <p>{submittedBy}</p>

      <h3>Location</h3>
      <p className={styles.location}>
        <FaMapMarkerAlt className={styles.pin}></FaMapMarkerAlt> {location}
      </p>

      <h3>Cost</h3>

      <p className={styles.cost}>
        {`${cost}`.replace(/_/g, " ")}{" "}
        <p className={styles.costIcon}>({CostComponent(cost)})</p>
      </p>

      <h3>Category</h3>
      <p className={styles.category}>{CategoryComponent(category)}</p>

      <h3>How would you rate your fun?</h3>
      <div className={styles.starRating}>{StarsComponent(funRating)}</div>

      <h3>How would you rate your personal growth?</h3>
      <div className={styles.starRating}>
        {StarsComponent(personalGrowthRating)}
      </div>

      <h3>What types of activities were done?</h3>
      <p>{activitiesDone}</p>

      <h3>What was your day-to-day like?*</h3>
      <p>{dayToDayExperiences}</p>

      <h3>Your top tips for anyone doing this experience?</h3>
      <p>{tips}</p>

      <h3>Most memorable moment?</h3>
      <p>{memorableMoment}</p>

      <h3>Lessons learned/experience gained?</h3>
      <p>{lessonsLearned}</p>

      {links.length !== 0 ? (
        <>
          <h3>Any helpful links?</h3>
          <ul>{linkArray}</ul>
        </>
      ) : null}
    </div>
  );
}
