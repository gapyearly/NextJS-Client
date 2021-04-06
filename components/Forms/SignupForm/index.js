import { useForm, useStep } from "react-hooks-helper";
import styles from "./SignupForm.module.css";
import Layout from "@components/Layouts/SignupLayout";
import Button from "@components/Buttons/Button";
import formSteps from "./formsteps";

const steps = [
  { id: "name" },
  { id: "address" },
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
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const props = { navigation, formData, setForm };

  const { id } = step;
  const FormComponent = formSteps[id];
  return (
    <Layout src="/images/greenblue-valleys.svg">
      <div className={styles.formContainer}>
        <FormComponent {...props}></FormComponent>
      </div>
    </Layout>
  );
}
