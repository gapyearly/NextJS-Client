import DashboardLayout from "@components/Layouts/DashboardLayout";
import styles from "@styles/Dashboard/Community.module.css";
import React, { useState } from "react";

function DashCommunity() {
  const [setWindow, window] = useState(null);

  return (
    <>
      <DashboardLayout>
        <div className={styles.container}>
          <div className={styles.community}>
            <h1>Community Hub</h1>
            <div className={styles.window}>
              <div className={styles.windowHeader}>
                <h1>Gapyearly Connect</h1>
              </div>
              <div className={styles.windowContent}></div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}

export default DashCommunity;
