import Chatbox from "@components/Dashboard/Messaging/Chatbox";
import DashboardLayout from "@components/Layouts/DashboardLayout";
import styles from "@styles/Dashboard/UserDashboard.module.css";

export default function Messaging() {
  return (
    <DashboardLayout>
      <div className={styles.chatboxWindow}>
        <Chatbox />
      </div>
    </DashboardLayout>
  );
}
