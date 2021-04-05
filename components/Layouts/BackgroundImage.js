import styles from "./BackgroundImage.module.css";

export default function BackgroundImage({ className, children, src }) {
  return (
    <div
      className={`${styles.background} ${styles[className]}`}
      style={{ backgroundImage: `url(${src})` }}
    >
      {children}
    </div>
  );
}
