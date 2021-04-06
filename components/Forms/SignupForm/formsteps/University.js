import Button from "@components/Buttons/Button";

export default function University({ next, previous, formData, setForm }) {
  const { firstName, lastName } = formData;
  return (
    <>
      <h1>Hi There!</h1>{" "}
      <Button color="greenBg" onClick={previous}>
        Previous
      </Button>
    </>
  );
}
