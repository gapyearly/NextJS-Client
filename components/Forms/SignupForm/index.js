import { useForm, useStep } from "react-hooks-helper";
import React, { useState, useEffect } from "react";

import styles from "./SignupForm.module.css";
import Layout from "@components/Layouts/SignupLayout";
import Button from "@components/Buttons/Button";
import formSteps from "./formsteps";

import sleep from "@util/sleep";

const steps = [
  { id: "name" },
  { id: "university" },
  { id: "contact" },
  { id: "review" },
  { id: "submit" },
];
const defaultData = {
  firstName: "",
  lastName: "",
  gapYear: "",
  university: "",
  location: "",
  profilePicture: "",
  bio: "",
  graduatingYear: "",
  interests: [],
  signupCompletion: true,
};

export default function SignupForm() {
  // Form data hook. formData represents form state, setForm changes the form state
  const [formData, setForm] = useForm(defaultData);
  // Slideshow hook. Step represents which step on slideshow we are on. Navigation allows you to traverse slideshow
  const { step, navigation } = useStep({ initialStep: 0, steps });
  // Original State
  const [style, setStyle] = useState({
    opacity: 0,
    transform: "translate(-10rem,0)",
  });
  // Animation when component is loaded
  useEffect(() => {
    setStyle({ opacity: 1, transform: "translate(0,0)" });
  }, []);
  // Animation for next
  const next = async () => {
    setStyle({
      opacity: 0,
      transform: "translate(10rem)",
    });
    await sleep(700);
    navigation.next();
    setStyle({
      opacity: 0,
      transform: "translate(-10rem)",
    });
    await sleep(700);
    setStyle({ opacity: 1, transform: "translate(0)" });
  };
  // Animation for previous
  const previous = async () => {
    setStyle({
      opacity: 0,
      transform: "translate(-10rem,0)",
    });
    await sleep(700);
    navigation.previous();
    setStyle({
      opacity: 0,
      transform: "translate(10rem,0)",
    });
    await sleep(700);
    setStyle({ opacity: 1, transform: "translate(0,0)" });
  };

  const props = { next, formData, setForm, previous };

  const FormComponent = formSteps[step.id];
  return (
    <Layout src="/images/greenblue-valleys.svg">
      <div style={style} className={styles.formContainer}>
        <FormComponent {...props}></FormComponent>
      </div>
    </Layout>
  );
}
