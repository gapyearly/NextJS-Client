import BackgroundImage from "@components/Layouts/BackgroundImage";
import styles from "@styles/Login.module.css";
import SignUpLayout from "@components/Layouts/SignupLayout";
import Link from "next/link";

export default function Login() {
  return (
    <SignUpLayout src="redYellow">
      <div className={styles.container}>
        <h1>Log in to access all of Gapyearly!</h1>
        <div className={styles.btns}>
          <Link href="/auth/google">
            <div>Login with Google</div>
          </Link>
        </div>
      </div>
    </SignUpLayout>
  );
}
