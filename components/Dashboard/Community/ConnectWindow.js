import Link from "next/link";
import styles from "@styles/Dashboard/UserDashboard.module.css";
import Switch from "rc-switch";
import "rc-switch/assets/index.css";
import strapi from "@api/strapi";
import { useAlert } from "react-alert";
import { useAuth } from "@contexts/auth";
import React, { useState } from "react";
import NProgress from "nprogress";
export default function Connect() {
  const { user, updateUser } = useAuth();
  const alert = useAlert();
  const [disabled, setDisabled] = useState(false);

  const onClick = async (value) => {
    setDisabled(true);
    try {
      NProgress.start();
      await strapi.put(`users/${user.id}`, {
        gapyearlyConnect: { enabled: value },
      });
      await updateUser();
      if (value === true) {
        alert.success("Enabled matching!");
      } else {
        alert.success("Disabled matching!");
      }
    } catch {
      alert.error("Could not enable. Please refresh or contact admin.");
    }
    setDisabled(false);
    NProgress.done();
  };
  return (
    <>
      <Switch
        onClick={onClick}
        checked={user && user.gapyearlyConnect && user.gapyearlyConnect.enabled}
        disabled={disabled}
      />
      <h3>Match me in future monthly rounds!</h3>
      <p>
        When the switch is on, you'll be included in the upcoming rounds of
        massages.
      </p>
      <p>
        Gapyearly will use your profile info to match you with another gapper.
        Find out more about matching <Link href="/community/connect">here</Link>
        !
      </p>

      <h3 className={styles.dateBanner}>Next match releases: June 1</h3>
    </>
  );
}
