export default function Name({ navigation, formData, setForm }) {
  const { firstName, lastName } = formData;
  console.log(firstName);
  return (
    <>
      <h1>Hi There!</h1>
      <br />
      <h1>Hi There!</h1>
      <input
        label="First Name"
        name="firstName"
        value={firstName}
        onChange={setForm}
      ></input>
    </>
  );
}
