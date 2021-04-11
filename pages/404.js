import Layout from "@components/Layouts/Layout";
import Link from "next/link";
import { FaRegFrown } from "react-icons/fa";
export default function Error404() {
  return (
    <Layout>
      <div className="error404">
        <FaRegFrown className="sadIcon" size="15rem"></FaRegFrown>
        <h1>404</h1>
        <h2> Oh no! Page not found.</h2>
        <Link href="/">Return to home?</Link>
      </div>
    </Layout>
  );
}
