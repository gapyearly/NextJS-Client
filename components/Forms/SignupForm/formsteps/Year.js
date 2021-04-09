import Button from "@components/Buttons/Button";
import styles from "components/Forms/SignupForm/SignupForm.module.css";

export default function Year({ next, previous, formData, setForm }) {
  const {
    gapYearStart,
    gapYearEnd,
    universityName,
    universityYear,
    location,
  } = formData;
  return (
    <>
      <form onSubmit={next} action="javascript:void(0);">
        <fieldset className="gapYear">
          <legend>When is/was your gap year?</legend>

          {/* <label htmlFor="gapYearStart">Start Year</label> */}
          <input
            type="number"
            id={styles.gapYearStart}
            min="1900"
            max="2100"
            name="gapYearStart"
            value={gapYearStart}
            onChange={setForm}
            placeholder="e.g. 2020"
          />

          {"  to  "}

          {/* <label htmlFor="gapYearEnd">End Year</label> */}
          <input
            type="number"
            id={styles.gapYearEnd}
            min="1900"
            max="2100"
            name="gapYearEnd"
            value={gapYearEnd}
            onChange={setForm}
            placeholder="e.g. 2021"
          />
        </fieldset>
        <fieldset>
          <legend>University & intended graduation year (if applicable)</legend>
          <input
            id={styles.universityName}
            name="universityName"
            value={universityName}
            onChange={setForm}
            placeholder="University Name"
          />
          <input
            type="number"
            id={styles.universityYear}
            name="universityYear"
            value={universityYear}
            onChange={setForm}
            placeholder="e.g. 2025"
          />
        </fieldset>
        <label htmlFor="location">Location (State/Province, Country)</label>
        <input
          type="text"
          id={styles.location}
          name="location"
          value={location}
          onChange={setForm}
          placeholder="e.g. New York, USA"
        ></input>

        <div className={styles.btns}>
          <Button
            className={styles.nextBtn}
            color="greenBg"
            onClick={previous}
            type="button"
          >
            Previous
          </Button>
          <Button className={styles.previousBtn} color="blueBg" type="submit">
            Next
          </Button>
        </div>
      </form>
    </>
  );
}
