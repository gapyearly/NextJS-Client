import styles from "@styles/Dashboard/UserDashboard.module.css";
import Link from "next/link";
import Button from "@components/Buttons/Button";

export default function TextBubbleButton({ children, href, color }) {
  return (
    <Button
      href={href}
      color={color}
      className={styles.textBubbleButtonContainer}
    >
      <div className={`${styles.textBubbleButton} ${styles[color]}`}>
        <h2>{children}</h2>
      </div>
    </Button>
  );
}
