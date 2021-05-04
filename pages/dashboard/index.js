import DashboardLayout from "@components/Layouts/DashboardLayout";
import styles from "@styles/Dashboard/UserDashboard.module.css";
export default function Dashboard() {
  return (
    <DashboardLayout>
      <div>
        <h1 className={styles.title}> Welcome to your dashboard!</h1>
      </div>
    </DashboardLayout>
  );
}
