import Button from "@components/Buttons/Button";
import DashboardLayout from "@components/Layouts/DashboardLayout";
import styles from "@components/Buttons/Button.module.css";

function DashCommunity() {
  return (
    <>
      <DashboardLayout>Community Layout</DashboardLayout>
      <Button className={styles.redBg}>heeyyyy</Button>
    </>
  );
}

export default DashCommunity;
