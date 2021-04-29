import Button from "@components/Buttons/Button";
import styles from "components/Forms/SignupForm/SignupForm.module.css";
import React, { useEffect, useState } from "react";

import dynamic from "next/dynamic";
import strapi from "api/strapi";

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
  const [interests, setInterests] = useState([]);
  useEffect(() => {
    const getInterests = async () => {
      try {
        const { data } = await strapi.get("interests");
        const formattedInterests = data.map((interest) => {
          return {
            label: interest.name,
            value: interest.id,
          };
        });
        setInterests(formattedInterests);
      } catch {
        console.log("Can't get Interests");
      }
    };
    getInterests();
  }, []);

  const { instagram, bio } = formData;
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
