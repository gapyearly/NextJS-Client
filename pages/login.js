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
          200+ gappers from 15 countries. <br></br>
          <span style={{ fontWeight: 600 }}>
            One community, infinite possibilities.
          </span>
        </h2>
        <h2>
          Get access to resources, connections, inspiration, and so much more
          for free, <span style={{ fontWeight: 600 }}>forever</span>.
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
