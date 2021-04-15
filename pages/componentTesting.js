import Layout from "@components/Layouts/Layout";
import SignupForm from "@components/Forms/SignupForm";
import Modal from "@components/Modal";
import DashboardLayout from "@components/Layouts/DashboardLayout/index.js";

import redirect from "nextjs-redirect";
export default function Test() {
  // const Redirect = redirect("/404");
  // if (process.env.NODE_ENV === "production") {
  //   return <Redirect></Redirect>;
  // }

  return <DashboardLayout></DashboardLayout>;
}
