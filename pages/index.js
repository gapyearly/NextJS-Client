import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "@components/Layouts/Layout";
import Link from "next/link";
import Title from "@components/Title";
import Button from "@components/Buttons/Button.js";
import strapi from "@api/strapi";
import BlogPreview from "@components/Home/BlogPreview";
import ExperiencePreview from "@components/Home/ExperiencePreview";
import Pill from "@components/Buttons/Pill.js";

export default function Home({ blogData, experienceData }) {
  const blogCards = blogData.map((blogCardData) => {
    return <BlogPreview key={blogCardData.slug} data={blogCardData} />;
  });
  const experienceCards = experienceData.map((experienceCardData) => {
    return (
      <ExperiencePreview
        key={experienceCardData.slug}
        data={experienceCardData}
      />
    );
  });
  return (
    <div className={styles.home}>
      <Head>
        <Title>Home</Title>
      </Head>
      <Layout>
        <div className={styles.hero}>
          <h1>Maximize your time outside the classroom.</h1>
          <img className={styles.heroImg} src="images/blue-valley.svg" alt="" />
        </div>

        <div className={styles.mainContainer}>
          <div className={styles.gradient}></div>
          <div className={styles.connectContainer}>
            <img
              className={styles.connectImage}
              src="images/staff.jpg"
              alt="Screenshot of Gapyearly staff members on a zoom meeting"
            ></img>

            <div className={styles.connectText}>
              <h2>
                Searching for a community of fellow gap year students? Look no
                further…
              </h2>
              <h3>
                A gap year provides a lot of room for independent growth, but we
                know sometimes it can be intimidating, isolating or just create
                FOMO when you’re on your own. <br /> That’s why we created
                Gapyearly Connect, the first global network of gap year
                students. Every month you opt in, we’ll match you with a group
                of fellow gappers with similar interests!
              </h3>
              <Button color="darkBg" href="/connect">
                Connect today!
              </Button>
            </div>
          </div>

          <div className={styles.memberContainer}>
            <img
              className={styles.memberImage}
              src="images/mentor-grid.png"
              alt="9 individual photos of Gapyearly's mentors and members, smiling and facing the camera."
            ></img>

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
                <Button href="/connect" color="blueBg">
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
                <Button href="/dashboard" color="blueBg">
                  Share your story!
                </Button>
              </div>
            </div>
          </div>

          <div className={styles.galleryContainer}>
            <h2>
              Need gap year inspo? <br /> Check out these{" "}
              <Link href="/opportunities/past-experiences">
                <a
                  href="/opportunities/past-experiences"
                  className="blueUnderline"
                >
                  past experiences
                </a>
              </Link>{" "}
              from gappers!{" "}
            </h2>
            <div className={styles.cardGallery}>{experienceCards}</div>
          </div>

          <div className={styles.galleryContainer}>
            <h2>
              Check out our{" "}
              <Link href="/blog">
                <a className="blueUnderline" href="/blog">
                  blog
                </a>
              </Link>{" "}
              to see what gappers around the world are up to!
            </h2>

            <div className={styles.cardGallery}>{blogCards}</div>
          </div>
          {/* <div className={styles.galleryContainer}>
            <h2>
              Get the latest on{" "}
              <Link href="https://instagram.com/gapyearly">
                <a
                  href="https://instagram.com/gapyearly"
                  className="blueUnderline"
                >
                  Instagram
                </a>
              </Link>
            </h2>
            <Button href="https://instagram.com/gapyearly" color="blueBg">
              + Follow us!
            </Button>
          </div> */}

          <div className={styles.newsletterContainer}>
            <h2>Never miss a beat.</h2>
            <h3>
              Subscribe to our newsletter for gap year opportunities and news!
            </h3>
            <form>
              <label htmlFor="newsletterEmail"></label>
              <input id="newsletterEmail" placeholder="Enter your email" />
              <Button color="blueBg">Submit</Button>
              {/* needs to be submitted to backend */}
            </form>
            <p>
              We hate spam too - check out our
              <Link href="/privacy-policy"> Privacy Policy</Link>.
            </p>
            {/* <img src="images/yellow-sun.svg" alt="" /> */}
          </div>
        </div>
      </Layout>
    </div>
  );
}
export async function getStaticProps(ctx) {
  const { data: blogData } = await strapi.get("blogs", {
    params: {
      _sort: "published_at:DESC",
      _limit: 3,
    },
  });

  const { data: experienceData } = await strapi.get("experiences", {
    params: {
      _sort: "published_at:DESC",
      _limit: 3,
    },
  });

  return {
    props: {
      blogData,
      experienceData,
    },
  };
}
