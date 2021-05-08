import Layout from "@components/Layouts/Layout";
import Button from "@components/Buttons/Button";
import styles from "@components/Forms/form.module.css";
import PageTitle from "@components/PageTitle";
import Head from "next/head";
import Title from "@components/Title";
import strapi from "@api/strapi";
import { useAlert } from "react-alert";
import { useForm } from "react-hooks-helper";

const defaultData = {
  fullName: "",
  email: "",
  instagram: "",
  message: "",
};

export default function Contact() {
  const alert = useAlert();
  const [formData, setForm] = useForm({});
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await strapi.post("/contact", formData);
      alert.success("Message sent. Please wait for a reply.");
    } catch {
      alert.error("Could not send message.");
    }
  };
  return (
    <>
      <PageTitle title="Contact" />
      <Layout>
        <p className={styles.contactDescription}>
          Questions? Suggestions? Feedback? Any ways we can help you?
        </p>
        <p className={styles.contactDescription}>
          Please fill out this form and we'll get back to you ASAP!
        </p>
        {/* TODO: alex fill in action pls */}
        <form onSubmit={onSubmit} className={styles.contact}>
          <label htmlFor="fullName">
            Full name
            <input
              id="contactFullName"
              type="text"
              name="fullName"
              onChange={setForm}
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
              onChange={setForm}
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
              onChange={setForm}
            ></input>
          </label>

          <label htmlFor="">
            Message
            <textarea
              id="contactMessage"
              type="textarea"
              name="message"
              onChange={setForm}
              required
            ></textarea>
          </label>
          <Button color="greenBg">Submit</Button>
        </form>
      </Layout>
    </>
  );
}
