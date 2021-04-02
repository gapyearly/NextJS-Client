import { useForm, useStep } from "react-hooks-helper";
import styles from "./SignupForm.module.css";

export default function SignupForm() {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;
  return (
    <main className={styles.background}>
      <img
        src="/images/greenblue-valleys.svg"
        alt="Background"
        className={styles.backgroundImage}
      />
    </main>
  );
}
