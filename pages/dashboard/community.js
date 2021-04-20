import DashboardLayout from "@components/Layouts/DashboardLayout";
import styles from "@styles/Dashboard/UserDashboard.module.css";
import React, { useState } from "react";
import Link from "next/link";
import Button from "@components/Buttons/Button";

function DashCommunity() {
  const [setWindow, window] = useState(null);

  return (
    <DashboardLayout>
      <h1 className={styles.title}>Community Hub</h1>

      <div className={styles.container}>
        <div className={styles.buttonSigns}>
          <Button href="/dashboard/community" color="redBg">
            Gapyearly Connect
          </Button>
          <Button href="/dashboard/community/ask" color="blueBg">
            Ask the community
          </Button>
          <Button href="/dashboard/community/members" color="greenBg">
            View all members
          </Button>
        </div>
        <div className={styles.window}>
          <div className={styles.windowHeader}>
            <h2>Gapyearly Connect</h2>
          </div>
          <div className={styles.windowContent}>
            <h3>Match me in future monthly rounds!</h3>
            {/* Switch here */}
            <p>
              Gapyearly will use your profile info to match you with another
              gapper. Find out more about matching{" "}
              <Link href="/connect">here</Link>!
            </p>
            <h3 className={styles.dateBanner}>
              Next match releases: April 25th
            </h3>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default DashCommunity;
