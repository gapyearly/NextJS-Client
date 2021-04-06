import Button from "@components/Buttons/Button";

export default function Name({ next, previous, formData, setForm }) {
  const { firstName, lastName } = formData;
  console.log(firstName);
  return (
    <>
      <h1>Hi There!</h1>
      <br />
      <h1>Hi There!</h1>
      <form>
        <input
          label="First Name"
          name="firstName"
          value={firstName}
          onChange={setForm}
          required
        />
      </form>

      <Button color="blueBg" onClick={next}>
        Next
      </Button>
    </>
  );
}
