import styles from "./BackgroundImage.module.css";

export default function BackgroundImage({ src, children }) {
  return (
    <div className={`${styles.background} ${styles[src]}`}>{children}</div>
  );
}
