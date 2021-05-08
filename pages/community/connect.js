import Head from "next/head";
import styles from "@styles/Connect.module.css";
import Layout from "@components/Layouts/Layout";
import PageTitle from "@components/PageTitle";
import Title from "@components/Title";
import Button from "@components/Buttons/Button.js";
import Pill from "@components/Buttons/Pill.js";
import Link from "next/link";
import { IoChatboxEllipses } from "react-icons/io5";

export default function Home() {
  return (
    <div className={styles.container}>
      <PageTitle title="Gapyearly Connect" />
      <Layout>
        <div className={styles.connectContainer}>
          <h2>
            The first simple, personally-tailored way to meet fellow gappers
            around the world every month, in just 3 easy steps:
          </h2>
          <div className={styles.stepsContainer}>
            <IoChatboxEllipses
              className={styles.stepsIcon}
              size="11rem"
            ></IoChatboxEllipses>
            <div className={styles.stepsText}>
              <h3>1. Apply. </h3>
              <p>
                Using your Gapyearly profile, applying has never been simpler.
                Haven't set up your Gapyearly profile yet? Sign up here!
              </p>
              <h3>2. Match.</h3>
              <p>
                Within a few days, you will receive your first match tailored to
                your interests according to your profile info!
              </p>
              <h3>3. Connect.</h3>
              <p>
                Every Monday, we’ll send out a weekly prompt to help you connect
                easily with your match.
              </p>
            </div>
          </div>
          <p>
            LetsGapp Connect runs in monthly cycles, so every month you will be
            matched with a new gapper! You should connect with your match at
            least twice per cycle, and up to as many times as you’d like.
          </p>
          <p>We can’t wait to meet you. Happy Gapping!</p>
          <p>
            *Please note: There are a limited number of spots every month and
            are given out on a first-come-first-serve basis!
          </p>
          <Button
            className={styles.applyBtn}
            color="greenBg"
            href="/dashboard/community"
          >
            Match me!
          </Button>
        </div>
      </Layout>
    </div>
  );
}
