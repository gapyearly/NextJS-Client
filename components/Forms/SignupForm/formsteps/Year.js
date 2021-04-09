import Button from "@components/Buttons/Button";
import styles from "components/Forms/SignupForm/SignupForm.module.css";

export default function Year({ next, previous, formData, setForm }) {
  const { gapYearStart, gapYearEnd, universityName, universityYear } = formData;
  return (
    <>
      {/* <h1>Hi There!</h1> <input type="file" /> */}
      <form onSubmit={next} action="javascript:void(0);">
        <fieldset>
          <legend>When is/was your gap year?</legend>
          <label htmlFor="gapYearStart">Start Year</label>
          <input
            type="number"
            id={styles.gapYearStart}
            Start="1900"
            max="2100"
            name="gapYearStart"
            value={gapYearStart}
            onChange={setForm}
            placeholder="e.g. 2020"
          />
          {" to "}
          <label htmlFor="gapYearEnd">End Year</label>
          <input
            type="number"
            id={styles.gapYearEnd}
            name="gapYearEnd"
            value={gapYearEnd}
            onChange={setForm}
            placeholder="e.g. 2021"
          />
        </fieldset>
        <label>University & intended graduation year (if applicable)</label>
        <input
          id="universityName"
          name="universityName"
          value={universityName}
          onChange={setForm}
          placeholder="University Name"
        />
        <input
          type="number"
          id="universityYear"
          name="universityYear"
          value={universityYear}
          onChange={setForm}
          placeholder="e.g. 2025"
        />
      </form>
      <Button color="greenBg" onClick={previous}>
        Previous
      </Button>
      <Button color="blueBg" type="submit">
        Next
      </Button>
    </>
  );
}
