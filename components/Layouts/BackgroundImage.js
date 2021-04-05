import styles from "./BackgroundImage.module.css";

export default function BackgroundImage({ className, children }) {
  return (
    <div className={`${styles.background} ${styles[className]}`}>
      {children}
    </div>
  );
}
