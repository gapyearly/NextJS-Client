import Button from "@components/Buttons/Button";
import styles from "components/Forms/SignupForm/SignupForm.module.css";
export default function Name({ next, previous, formData, setForm }) {
  const { firstName, lastName } = formData;
  return (
    <>
      <form onSubmit={next} action="javascript:void(0);">
        <h1>Hi there!</h1>
        <h2> We're so excited to have you here.</h2>
        <p>Let's get to know you a bit better. </p>
        <p>What's your name?</p>

        <label>
          First Name*
          <input
            id="firstName"
            label="First Name"
            name="firstName"
            value={firstName}
            onChange={setForm}
            required
          />
        </label>
        <label>
          Last Name*
          <input
            id="lastName"
            label="Last Name"
            name="lastName"
            value={lastName}
            onChange={setForm}
            required
          />
        </label>
        <div className={styles.btns}>
          <Button color="blueBg" type="submit" className={styles.firstNextBtn}>
            Next
          </Button>
        </div>
      </form>
    </>
  );
}
