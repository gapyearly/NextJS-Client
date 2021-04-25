import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "@components/Layouts/Layout";
import Link from "next/link";
import Title from "@components/Title";
import Button from "@components/Buttons/Button.js";
import Pill from "@components/Buttons/Pill.js";

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <Title>Home</Title>
      </Head>
      <Layout>
        <div className={styles.hero}>
          <h1>Maximize your time outside the classroom.</h1>
          <img
            className={styles.heroImg}
            src="images/green-valley.svg"
            alt=""
          />
        </div>
        <div className={styles.mainContainer}>
          <div className={styles.connectContainer}>
            <img src="images/placeholder.jpg" alt=""></img>
            <div className={styles.connectText}>
              <h2>
                Searching for a community of fellow gap year students? Look no
                further…
              </h2>
              <h3>
                A gap year provides a lot of room for independent growth, but we
                know sometimes it can be intimidating, isolating or just create
                FOMO when you’re on your own. That’s why we created LetsGapp
                Connect, the first global network of gap year students. Every
                month you opt in, we’ll match you with a group of fellow gappers
                with similar interests! Sign up today to join the community.
              </h3>
              <Button color="darkBg" href="/connect">
                Connect today!
              </Button>
            </div>
          </div>

          <div className={styles.memberContainer}>
            <div className={styles.memberGrid}>
              <img src="images/redyellow-valleys.svg" alt=""></img>
            </div>
            <div className={styles.memberText}>
              <div className={styles.futureMemberContainer}>
                <h2>
                  <span className={styles.highlight}>Future gapper?</span> We're
                  here to help make your gap year the best year yet.
                </h2>
                <h3>
                  Our team of gap year alums from around the world are here to
                  answer any questions you have within 48 hours – all free of
                  charge.
                </h3>
                <Button href="/connect" color="greenBg">
                  Meet our mentors!
                </Button>
              </div>
              <div className={styles.gapMemberContainer}>
                <h2>
                  <span className={styles.highlight}>
                    Current or past gapper?
                  </span>{" "}
                  Support the community and share your experiences!
                </h2>
                <h3>
                  We want to hear from you! Tell us about the memories you made,
                  your parent reflections, and advice for the community.
                </h3>
                <Button href="/dashboard" color="greenBg">
                  Share your story!
                </Button>
              </div>
            </div>
          </div>

          <div className={styles.galleryContainer}>
            <h2>
              Need gap year inspo? <br /> Check out these{" "}
              <Link href="/opportunities/past-experiences">
                past experiences
              </Link>{" "}
              from gappers!{" "}
            </h2>
            <div className={styles.cardGallery}></div>
          </div>

          <div className={styles.galleryContainer}>
            <h2>
              Check out our <Link href="/blog">blog</Link> to see what gappers
              around the world are up to!
            </h2>
          </div>
          <div className={styles.galleryContainer}>
            <h2>
              Get the latest on{" "}
              <Link href="https://instagram.com/gapyearly">Instagram</Link>
            </h2>
            <Button href="https://instagram.com/gapyearly" color="greenBg">
              + Follow us!
            </Button>
          </div>

          <div className={styles.newsletterContainer}>
            <h2>Never miss a beat.</h2>
            <h3>
              Subscribe to our newsletter for gap year opportunities and news!
            </h3>
            <form>
              <label htmlFor="newsletterEmail"></label>
              <input id="newsletterEmail" placeholder="Enter your email" />
              <Button color="greenBg">Submit</Button>
              {/* needs to be submitted to backend */}
              <p>
                We hate spam too - we will never sell your data. Read our
                Privacy Policy <Link href="/privacy-policy">here</Link>.
              </p>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
}
