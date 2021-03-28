/**
 *
 *
 */
import Layout from "@components/Layouts/Layout";

import redirect from "nextjs-redirect";
export default function Home() {
  const Redirect = redirect("/404");
  if (process.env.NODE_ENV === "production") {
    return <Redirect></Redirect>;
  }

  return (
    <Layout>
      <p>This is some content</p>
    </Layout>
  )>;
}
