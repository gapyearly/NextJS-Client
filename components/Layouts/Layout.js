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
// Layouts must be used with a classname. They are:
// - fixedContentWidth: for pages that have pixel widths with media queries, like blog posts or FAQs
// - galleryWidth: for masonry gallery pages, where cards need closer to fullscreen width/less margins & has built in media queries
// - homeWidth: for homepage
// - dashboardWidth: for user dashboard, which uses margin to avoid the nav at the side */
