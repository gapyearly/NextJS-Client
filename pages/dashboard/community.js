import DashboardLayout from "@components/Layouts/DashboardLayout";
import styles from "@styles/Dashboard/Community.module.css";

function DashCommunity() {
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
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}

export default DashCommunity;
