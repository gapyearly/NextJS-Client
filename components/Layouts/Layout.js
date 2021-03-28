import Navbar from "./Navbar";
import Footer from "./Footer.js";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <style jsx>{`
        main {
          margin-top: var(--navbarHeight);
        }
      `}</style>
    </>
  );
}
