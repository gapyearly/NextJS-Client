import "../styles/globals.css";
import "../styles/NProgress.css";
import "../styles/ckeditor.css";
// Used for authentication handling, and user info

import { AuthProvider } from "@contexts/auth";

import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import NProgress from "nprogress";
import Router from "next/router";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
function MyApp({ Component, pageProps }) {
  return (
    <AlertProvider template={AlertTemplate}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </AlertProvider>
  );
}

export default MyApp;
