import Layout from "@components/Layouts/Layout";
import Button from "@components/Buttons/Button";
import styles from "@components/Buttons/Button.module.css";
import PageTitle from "@components/PageTitle";

export default function Contact() {
  return (
    <>
      <PageTitle>Contact</PageTitle>
      <Layout>
        <p>Questions? Suggestions? Feedback? Any ways we can help you?</p>
        <p>Please fill out this form and we'll get back to you ASAP!</p>
        {/* TODO: alex fill in action pls */}
        <form method="POST" action="#">
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
          <button color="green">Submit</button>
        </form>
      </Layout>
    </>
  );
}
