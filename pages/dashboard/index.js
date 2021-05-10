import DashboardLayout from "@components/Layouts/DashboardLayout";
import styles from "@styles/Dashboard/UserDashboard.module.css";
export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className={styles.dashInstructions}>
        <h1 className={styles.title}> Welcome to your dashboard!</h1>
        <h2>
          From here, you can use the tabs on the left to interact with the
          Gapyearly community!
        </h2>

        <ul>
          <li>
            <span>Messaging:</span> view your inbox and send messages to other
            users.
          </li>

          <li>
            <span> Community Hub:</span> view other users’ profiles, ask
            questions to the Gapyearly community, and sign up for Gapyearly
            Connect, our gapper matching service!
          </li>
          <li>
            <span>Share Your Story:</span> register as a Mentor, share your gap
            year experiences, submit a post to our blog, share a gap year
            testimonial from your parents, or submit a reflection for our Girls
            Who Gap page!
          </li>
          <li>
            <span>Profile Overview:</span> edit your public profile.
          </li>
        </ul>
      </div>
    </DashboardLayout>
  );
}
