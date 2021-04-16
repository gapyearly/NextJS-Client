// Redirects authentication to backend flow.
import redirect from "nextjs-redirect";
import styles from "@styles/Login.module.css";

const Redirect = redirect(
  `${process.env.NEXT_PUBLIC_BACKEND_API}/connect/google`
);
export default function GoogleRedirect() {
  return (
    <Redirect>
      <h1 className={styles.redirect}>Loading...</h1>
    </Redirect>
  );
}
