import Link from "next/link";
import styles from "@styles/Dashboard/UserDashboard.module.css";
import Switch from "rc-switch";
import "rc-switch/assets/index.css";
import strapi from "@api/strapi";
import { useAlert } from "react-alert";
import { useRouter } from "next/router";
import { useAuth } from "@contexts/auth";
import React, { useState } from "react";
import NProgress from "nprogress";
export default function Connect() {
  const { user } = useAuth();
  const alert = useAlert();
  const router = useRouter();
  const [enabled, setEnabled] = useState(false);
  const onValueChange = (e) => {
    setEnabled(e.target.value);
    console.log(setEnabled(e.target.value));
  };

  const onClick = async (event) => {
    event.preventDefault();
    console.log(enabled);
    try {
      NProgress.start();
      await strapi.put(`users/${user.id}`, {
        connectInfo: { enabled },
      });
      alert.success("Matching enabled!");
      router.push("/dashboard/submission");
    } catch {
      alert.error("Could not enable. Please refresh or contact admin.");
    }
    NProgress.done();
  };

  return (
    <>
      <h3>Match me in future monthly rounds!</h3>

      <p>
        Gapyearly will use your profile info to match you with another gapper.
        Find out more about matching <Link href="/community/connect">here</Link>
        !
      </p>
      <h3 className={styles.dateBanner}>Next match releases: April 25th</h3>
      <Switch onChange={onValueChange} onClick={onClick} />
    </>
  );
}
