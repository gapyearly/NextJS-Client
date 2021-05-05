import BackgroundImage from "@components/Layouts/BackgroundImage";
import styles from "@styles/Login.module.css";
import SignUpLayout from "@components/Layouts/SignupLayout";
import Link from "next/link";
import { IoMdPin } from "react-icons/io";

export default function Login() {
  return (
    <SignUpLayout src="redYellow">
      <div className={styles.container}>
        <h1>Log in to access all of Gapyearly!</h1>
        <h2>
          <span className={styles.bold}>200+ gappers from 30 countries. </span>
          <br></br>
          One community, infinite possibilities.
        </h2>
        <h2>
          Get access to a global gap year{" "}
          <span className={styles.bold}>community</span>, personalized{" "}
          <span className={styles.bold}>mentorship</span>, impactful{" "}
          <span className={styles.bold}>experiences</span>, and so much more for
          free -- forever.
        </h2>
        <div className={styles.btns}>
          <Link href="/auth/google">
            <img
              src="/images/btn_google_signin_light_normal_web.png"
              alt="Google Login Button"
            ></img>
          </Link>
        </div>
      </div>
    </SignUpLayout>
  );
}
