import { useForm, useStep } from "react-hooks-helper";
import styles from "./SignupForm.module.css";
import Image from "next/image";

export default function SignupForm() {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;
  return (
    <main className={styles.background}>
      <Image
        src="/images/greenblue-valleys.svg"
        layout="fill"
        objectFit="contain"
        objectPosition="bottom center"
        className={styles.backgroundImage}
      />
    </main>
  );
}
