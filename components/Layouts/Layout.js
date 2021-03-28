import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <p>Footer</p>
      <style jsx>{`
        main {
          margin-top: var(--navbarHeight);
        }
      `}</style>
    </>
  );
}
