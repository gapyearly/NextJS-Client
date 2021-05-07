import Navbar from "./Navbar";
import Footer from "./Footer.js";
import styles from "@components/Layouts/Layout.module.css";

export default function Layout({ children, className }) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles[className]}>{children}</main>
      <Footer />
    </div>
  );
}
