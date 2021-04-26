import Link from "next/link";
import styles from "@styles/Dashboard/UserDashboard.module.css";

export default function Connect() {
  return (
    <>
      <h3>Match me in future monthly rounds!</h3>
      {/* Switch here */}
      <p>
        Gapyearly will use your profile info to match you with another gapper.
        Find out more about matching <Link href="/community/connect">here</Link>
        !
      </p>
      <h3 className={styles.dateBanner}>Next match releases: April 25th</h3>
    </>
  );
}
