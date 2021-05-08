import Button from "@components/Buttons/Button";
import styles from "components/Forms/SignupForm/SignupForm.module.css";
import IntrestDropdown from "../../InterestsDropdown";

export default function Bio({ next, previous, formData, setForm }) {
  const { instagram, language, bio } = formData;
  const onChange = (item) => {
    formData.interests = item.map((interest) => interest.value);
  };

  return (
    <>
      <form onSubmit={next} action="javascript:void(0);">
        <label htmlFor="instagram">Instagram Handle</label>
        @
        <input
          id={styles.instagram}
          name="instagram"
          value={instagram}
          onChange={setForm}
        />
        <label htmlFor="interests">Interests</label>
        <IntrestDropdown onChange={onChange} />
        <label htmlFor="language">Language interests (if applicable)</label>
        <input
          id={styles.language}
          name="language"
          value={language}
          onChange={setForm}
          placeholder="e.g. Mandarin Chinese, French, Portugese"
        />
        <label htmlFor="bio">Write a short bio!</label>
        <textarea
          type="textarea"
          id={styles.bio}
          name="bio"
          value={bio}
          onChange={setForm}
          placeholder="Max. character length: 500"
          maxLength="500"
        />
        <div className={styles.btns}>
          <Button
            className={styles.previousBtn}
            color="greyBg"
            onClick={previous}
            type="button"
          >
            Previous
          </Button>
          <Button className={styles.nextBtn} color="blueBg" type="submit">
            Next
          </Button>
        </div>
      </form>
    </>
  );
}
