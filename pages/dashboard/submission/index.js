import DashboardLayout from "@components/Layouts/DashboardLayout";
import TextBubbleButton from "@components/Layouts/DashboardLayout/TextBubbleButton";
import styles from "@styles/Dashboard/UserDashboard.module.css";
import { BsFillChatSquareFill } from "react-icons/bs";
export default function Submission() {
  return (
    <DashboardLayout>
      <h1 className={styles.title}>Share Your Story</h1>

      <div className={styles.shareYourStory}>
        <TextBubbleButton color="redBg" href="/dashboard/submission/mentor">
          Become a <span className={styles.bold}>Mentor</span>
        </TextBubbleButton>
        <TextBubbleButton
          color="greenBg"
          href="/dashboard/submission/experience"
        >
          Review an <span className={styles.bold}>Experience</span>
        </TextBubbleButton>
        <TextBubbleButton color="blueBg" href="/dashboard/submission/blog">
          Coming <span className={styles.bold}>Soon</span>
        </TextBubbleButton>
        <TextBubbleButton
          color="greenBg"
          href="/dashboard/submission/parent-reference"
        >
          Share a <span className={styles.bold}>Parent Reference</span>
        </TextBubbleButton>

        <TextBubbleButton color="redBg" href="/dashboard/submission/experience">
          Share your{" "}
          <span className={styles.bold}>Solo Female Travel Tips</span>
        </TextBubbleButton>
      </div>
    </DashboardLayout>
  );
}
