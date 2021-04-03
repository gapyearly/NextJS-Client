/**
 * Used in /blog gallery page.
 */
import styles from "./PastExperienceCard.module.css";
import pillstyles from "components/Buttons/Button.module.css";
import Pill from "components/Buttons/Pill.js";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

/**
 * Paremters for a blogcard
 * @param  {string} source
 * @param  {string} title
 * @param  {string} desc
 * @param  {string} href
 */
export default function ExperienceCard({ data, onClick }) {
  // TODO Fix up structure and styling
  const { title, location, funRating, slug, image, category, cost } = data;
  const handleClick = () => {
    onClick(data);
  };

  const Card = () => {
    return (
      <div
        className={styles.card}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown
      >
        <img src={image.url} alt={image.alt} />
        <h2>{title}</h2>
        <div className={styles.cardSummary}>
          <p className={styles.location}>
            <FaMapMarkerAlt className={styles.pin}></FaMapMarkerAlt> {location}
          </p>
          {
            {
              Cost_Money: <p className={styles.costMoney}>-$</p>,

              Earned_Money: <p className={styles.earnedMoney}>-$</p>,

              Broke_Even: <p className={styles.brokeEven}>$</p>,

              Free: <p className={styles.free}>FREE</p>,
            }[cost]
          }
          {
            {
              travel: (
                <Pill color="blueBg" href="/">
                  Travel
                </Pill>
              ),
              paidWork: (
                <Pill color="darkBg" href="/">
                  Paid Work
                </Pill>
              ),

              programs: (
                <Pill color="redBg" href="/">
                  Program
                </Pill>
              ),

              volunteer: (
                <Pill color="greenBg" href="/">
                  Volunteer
                </Pill>
              ),

              entrepreneurship: (
                <Pill color="darkBg" href="/">
                  Entrepreneurship
                </Pill>
              ),
            }[category]
          }
        </div>
      </div>
    );
  };
  // const costIcon =
  //   cost === "Cost_Money" ? (
  //     <p className="costMoney">-$</p>
  //   ) : cost === "Earned_Money" ? (
  //     <p className="earnedMoney">+$</p>
  //   ) : cost === "Broke_Even" ? (
  //     <p className="brokeEven">$</p>
  //   ) : (
  //     <p className="free">FREE</p>
  //   );

  return (
    <div>
      <Card />
    </div>
  );
}
