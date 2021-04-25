import DashboardLayout from "@components/Layouts/DashboardLayout";
import styles from "@styles/Dashboard/UserDashboard.module.css";
import React, { useState } from "react";
import Button from "@components/Buttons/Button";
import communityPages from "@components/Dashboard/Community";

function DashCommunity() {
  const [window, setWindow] = useState(communityPages.connect);
  const Page = window.component;
  return (
    <DashboardLayout>
      <h1 className={styles.title}>Community Hub</h1>

      <div className={styles.container}>
        <div className={styles.buttonSigns}>
          <Button
            onClick={() => {
              setWindow(communityPages.connect);
            }}
            color="redBg"
          >
            Gapyearly Connect
          </Button>
          <Button
            onClick={() => {
              setWindow(communityPages.ask);
            }}
            color="blueBg"
          >
            Ask the community
          </Button>
          <Button href="/dashboard/community/members" color="greenBg">
            View all members
          </Button>
        </div>
        <div className={styles.window}>
          <div className={styles.windowHeader}>
            <h2>{window.title}</h2>
          </div>
          <div className={styles.windowContent}>
            <Page></Page>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default DashCommunity;
