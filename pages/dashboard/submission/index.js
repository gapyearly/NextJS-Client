import DashboardLayout from "@components/Layouts/DashboardLayout";
import TextBubbleButton from "@components/Layouts/DashboardLayout/TextBubbleButton";
import styles from "@styles/Dashboard/UserDashboard.module.css";
import Link from "next/link";
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
          Write a <span className={styles.bold}>Blog Post</span>
        </TextBubbleButton>
        <TextBubbleButton
          color="greenBg"
          href="/dashboard/submission/parent-reflection"
        >
          Share a <span className={styles.bold}>Parent Reflections</span>
        </TextBubbleButton>
        <TextBubbleButton
          color="redBg"
          href="/dashboard/submission/girls-who-gap"
        >
          Share your{" "}
          <span className={styles.bold}>Solo Female Travel Tips</span>
        </TextBubbleButton>
      </div>
      <div className={styles.anonymousCaption}>
        Want to submit anonymously? <Link href="/contact">Contact us</Link>!
      </div>
    </DashboardLayout>
  );
}
