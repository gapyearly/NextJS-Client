import "../styles/globals.css";
import "../styles/NProgress.css";
import "../styles/ckeditor.css";
import "@styles/react-chat-elements.css";

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
  const options = {
    position: positions.TOP_CENTER,
    // timeout: 5000,
    offset: "30px",

    // you can also just use 'scale'
    transition: transitions.SCALE,
    containerStyle: {
      zIndex: 10002,
    },
  };
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </AlertProvider>
  );
}

export default MyApp;
