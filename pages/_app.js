import "../styles/globals.css";
import "../styles/NProgress.css";
import "../styles/ckeditor.css";
import styles from "styles/Alert.module.css";
// Used for authentication handling, and user info
import { FaCheck, FaExclamationCircle } from "react-icons/fa";
import { IoInformationCircleOutline, IoClose } from "react-icons/io5";
import { AuthProvider } from "@contexts/auth";

import { transitions, positions, Provider as AlertProvider } from "react-alert";

import NProgress from "nprogress";
import Router from "next/router";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const AlertTemplate = ({ options, message, close }) => {
    return (
      <div className={styles.alert}>
        {options.type === "info" && <IoInformationCircleOutline />}
        {options.type === "success" && <FaCheck />}
        {options.type === "error" && (
          <FaExclamationCircle
            value={{ style: { width: 5, marginRight: "15px" } }}
          />
        )}

        {message}
        <button onClick={close}>
          <IoClose />
        </button>
      </div>
    );
  };

  const options = {
    position: positions.TOP_CENTER,
    // timeout: 5000,

    // you can also just use 'scale'
    transition: transitions.FADE,
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
