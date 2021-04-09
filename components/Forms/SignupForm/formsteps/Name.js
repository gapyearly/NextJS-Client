import Button from "@components/Buttons/Button";

export default function Name({ next, previous, formData, setForm }) {
  const { firstName, lastName } = formData;
  console.log(firstName);
  return (
    <>
      <h1>Hi there!</h1>
      <h2> We're so excited to have you here.</h2>
      <p>Let's get to know you a bit better. </p>
      <p>What's your name?</p>
      <form onSubmit={next} action="javascript:void(0);">
        <label>
          First Name *
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
          Last Name *
          <input
            id="lastName"
            label="Last Name"
            name="lastName"
            value={lastName}
            onChange={setForm}
            required
          />
        </label>
        <Button color="blueBg" type="submit">
          Next
        </Button>
      </form>
    </>
  );
}