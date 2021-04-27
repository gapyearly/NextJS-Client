import Button from "@components/Buttons/Button";
import styles from "components/Forms/SignupForm/SignupForm.module.css";
import AvatarEditor from "react-avatar-editor";
import React from "react";

import dynamic from "next/dynamic";

// const Dropdown = dynamic(
//   async () => {
//     const module = await import("reactjs-dropdown-component");
//     const DD = module.Dropdown;

//     return ({ forwardedRef, ...props }) => <DD ref={forwardedRef} {...props} />;
//   },
//   { ssr: false }
// );

const DropdownMultiple = dynamic(
  async () => {
    const module = await import("reactjs-dropdown-component");
    const DDM = module.DropdownMultiple;

    return ({ forwardedRef, ...props }) => (
      <DDM ref={forwardedRef} {...props} />
    );
  },
  { ssr: false }
);
export default function Bio({ next, previous, formData, setForm }) {
  const { instagram, bio } = formData;
  const interests = [
    {
      label: "Solo Travel/Backpacking",
      value: "soloTravelBackpacking",
    },
    {
      label: "Outdoors",
      value: "outdoors",
    },
    {
      label: "Volunteering/Service",
      value: "volunteeringService",
    },
    {
      label: "Work/Interning",
      value: "workInterning",
    },
    {
      label: "Arts",
      value: "arts",
    },
    {
      label: "Science/Research",
      value: "scienceResearch",
    },
    {
      label: "Technology",
      value: "technology",
    },
    {
      label: "",
      value: "",
    },
    {
      label: "",
      value: "",
    },
    {
      label: "",
      value: "",
    },
    {
      label: "",
      value: "",
    },
    {
      label: "",
      value: "",
    },
    {
      label: "",
      value: "",
    },
    {
      label: "",
      value: "",
    },
  ];
  const onChange = (item, name) => {
    console.log(item, name);
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
          pattern="^[@^%<>^$]+$
          "
        />
        <label htmlFor="interests">Interests</label>
        <DropdownMultiple
          name="interests"
          title="Select your interests"
          titleSingular="interest"
          searchable={["Search...", "No matching interest"]}
          list={interests}
          onChange={onChange}
          styles={{
            wrapper: {
              width: "25rem",
              marginBottom: "0.7rem",
              marginTop: "0.3rem",
              borderRadius: 5,
            },
            headerTitle: {
              fontWeight: 500,
            },
            header: {
              fontSize: "1rem",
              border: "1px solid var(--horizon)",
            },
            listSearchBar: {
              fontSize: "1rem",
              height: "2rem",
              marginBottom: 0,
              color: "grey",
            },
            listItem: {
              fontSize: "0.9rem",
              padding: "4px 10px",
            },
            listItemNoResult: {
              fontSize: "0.9rem",
              padding: "4px 10px",
            },
            list: { maxHeight: "unset" },
            scrollList: { padding: 0 },
            checkIcon: { color: "var(--berry)" },
          }}
        />
        {/* wrapper
header
headerTitle
headerArrowUpIcon
headerArrowDownIcon
checkIcon
list
listSearchBar
scrollList
listItem
listItemNoResult */}
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
