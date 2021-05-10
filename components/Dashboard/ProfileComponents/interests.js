import React, { useEffect, useState } from "react";
import strapi from "@api/strapi";

export default function Interests({ interests, value }) {
  const [interestsKey, setInterestsKey] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getInterests = async () => {
      try {
        const { data } = await strapi.get("interests");
        const formattedInterests = data.reduce((obj, { name, id }) => {
          return {
            ...obj,
            [id]: name,
          };
        }, {});
        setInterestsKey(formattedInterests);
        setLoading(false);
      } catch {
        console.log("Can't get Interests");
      }
    };
    getInterests();
  }, []);
  if (value) interests = value;
  return (
    !loading &&
    interests
      .map((interestId) => {
        if (typeof interestId === "string") return interestsKey[interestId];
        return interestsKey[interestId.id];
      })
      .join(", ")
  );
}
