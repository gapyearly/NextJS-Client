import "../styles/globals.css";
import "../styles/NProgress.css";
import "../styles/ckeditor.css";
import styles from "styles/Alert.module.css";
import "@styles/react-chat-elements.css";

// Used for authentication handling, and user info
import { FaCheck, FaExclamationCircle } from "react-icons/fa";
import { IoInformationCircleOutline, IoClose } from "react-icons/io5";
import { AuthProvider } from "@contexts/auth";

import { transitions, positions, Provider as AlertProvider } from "react-alert";
import { DefaultSeo } from "next-seo";

import NProgress from "nprogress";
import Router from "next/router";
import Head from "next/head";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const AlertTemplate = ({ options, message, close }) => {
    const bgColor =
      options.type === "info"
        ? "blueBg"
        : options.type === "success"
        ? "greenBg"
        : "redBg";
    return (
      <div className={`${styles.alert} ${styles[bgColor]}`}>
        {options.type === "info" && (
          <IoInformationCircleOutline style={{ margin: "0 6px" }} />
        )}
        {options.type === "success" && <FaCheck style={{ margin: "0 6px" }} />}
        {options.type === "error" && (
          <FaExclamationCircle style={{ margin: "0 6px" }} />
        )}

        {message}
        <button onClick={close} className={styles[bgColor]}>
          <IoClose />
        </button>
      </div>
    );
  };

  const options = {
    position: positions.TOP_CENTER,
    timeout: 3000,
    transition: transitions.FADE,
    containerStyle: {
      zIndex: 10002,
    },
  };
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <DefaultSeo
        title="Welcome to Gapyearly"
        titleTemplate="%s | Gapyearly"
        description="A free gap year guide written by gap year students. See what gap year students have done & plan a life-changing year with our gap year mentors."
        openGraph={{
          type: "website",
          url: "https://www.gapyearly.com",
          site_name: "Gapyearly",
          images: [{ url: "/images/discover-your-direction.jpg" }],
          title: "gapyearly — Welcome to Gapyearly.",
          description:
            "A free gap year guide written by gap year students. See what gap year students have done & plan a life-changing year with our gap year mentors.",
        }}
      />
      <AlertProvider template={AlertTemplate} {...options}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </AlertProvider>
    </>
  );
}

export default MyApp;
