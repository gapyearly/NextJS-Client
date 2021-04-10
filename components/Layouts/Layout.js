import Navbar from "./Navbar";
import Footer from "./Footer.js";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: "70vh",
          marginTop: "var(--navbarHeight)",
          maxWidth: "100vw",
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
