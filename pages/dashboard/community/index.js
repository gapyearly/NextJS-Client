import DashboardLayout from "@components/Layouts/DashboardLayout";
import styles from "@styles/Dashboard/UserDashboard.module.css";
import React, { useState } from "react";
import Button from "@components/Buttons/Button";
import communityPages from "@components/Dashboard/Community";
import { BsPeopleFill, BsQuestionCircleFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
function DashCommunity() {
  const [window, setWindow] = useState(communityPages.connect);
  const Page = window.component;
  return (
    <DashboardLayout>
      <h1 className={styles.title}>Community Hub</h1>

      <div className={styles.communityContainer}>
        <div className={styles.buttonSigns}>
          <Button
            className={styles.connectBtn}
            onClick={() => {
              setWindow(communityPages.connect);
            }}
            color="redBg"
          >
            <FaMapMarkerAlt style={{ marginRight: 6 }} />
            Gapyearly Connect
          </Button>
          <Button
            className={styles.askBtn}
            onClick={() => {
              setWindow(communityPages.ask);
            }}
            color="blueBg"
          >
            <BsQuestionCircleFill style={{ marginRight: 6 }} />
            Ask the community
          </Button>
          <Button
            className={styles.allMembersBtn}
            color="greenBg"
            onClick={() => {
              setWindow(communityPages.allmembers);
            }}
          >
            <BsPeopleFill style={{ marginRight: 6 }} />
            View all members
          </Button>
          <span className={styles.signPost} />
        </div>
        <div className={styles.window}>
          <div className={`${styles.windowHeader} ${styles[window.color]}`}>
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
