import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "@styles/Login.module.css";

const provider = "google";
export default function Redirect() {
  const router = useRouter();

  // When the router is ready, it'll attempt to login with parameters
  useEffect(() => {
    if (router.isReady) {
      window.sessionStorage.setItem("redirect", "/dashboard/submission/mentor");
      const { role } = router.query;
      if (role) window.sessionStorage.setItem("role", role);
      router.push("/login");
    }
  }, [router]);
  return <h1 className={styles.redirect}>Loading...</h1>;
}
