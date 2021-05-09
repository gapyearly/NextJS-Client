import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import strapi from "api/strapi";
import { useMediaQuery } from "react-responsive";

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

export default function InterestDropdown({ onChange, setParentValue, select }) {
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
  const setValue = (item) => {
    if (onChange) return onChange(item);
    if (setParentValue) setParentValue(item.map((interest) => interest.value));
  };
  const isMobile = useMediaQuery({ query: `(max-width:500px)` });
  const isTinyPhone = useMediaQuery({ query: `(max-width:400px)` });
  return (
    interests.length !== 0 && (
      <DropdownMultiple
        name="interests"
        title="Select your interests"
        titleSingular="interest"
        searchable={["Search...", "No matching interest"]}
        list={interests}
        onChange={setValue}
        select={select}
        styles={{
          wrapper: {
            width: isTinyPhone ? "15rem" : isMobile ? "20rem" : "25rem",
            marginBottom: "0.7rem",
            marginTop: "0.3rem",
            borderRadius: 5,
          },
          headerTitle: {
            fontWeight: 500,
            lineHeight: 1.7,
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
    )
  );
}
/* wrapper
header
headerTitle
headerArrowUpIcon
headerArrowDownIcon
checkIcon
list
listSearchBar
scrollList
listItem
listItemNoResult */
