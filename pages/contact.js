import Layout from "@components/Layouts/Layout";
import Button from "@components/Buttons/Button";
import btnstyles from "@components/Buttons/Button.module.css";
import styles from "@components/Forms/form.module.css";
import PageTitle from "@components/PageTitle";

export default function Contact() {
  return (
    <>
      <PageTitle>Contact</PageTitle>
      <Layout>
        <p className={styles.contactDescription}>
          Questions? Suggestions? Feedback? Any ways we can help you?
        </p>
        <p className={styles.contactDescription}>
          Please fill out this form and we'll get back to you ASAP!
        </p>
        {/* TODO: alex fill in action pls */}
        <form method="POST" action="#" className={styles.contact}>
          <label htmlFor="fullName">
            Full name
            <input
              id="contactFullName"
              type="text"
              name="fullName"
              required
            ></input>
          </label>

          <label htmlFor="email">
            Email
            <input
              id="contactEmail"
              type="email"
              name="email"
              placeholder="example@email.com"
              required
            ></input>
          </label>

          <label htmlFor="instagram">
            Instagram
            <input
              id="contactInstagram"
              type="text"
              name="instagram"
              placeholder="@"
            ></input>
          </label>

          <label htmlFor="">
            Message
            <textarea
              id="contactMessage"
              type="textarea"
              name="name"
              required
            ></textarea>
          </label>
          <Button color="greenBg" href="#">
            Submit
          </Button>
        </form>
      </Layout>
    </>
  );
}
