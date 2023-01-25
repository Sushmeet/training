import React, { useState } from "react";
import { Input } from "../Input";
import data from "../Data";
import "./BabyName.css";

export const BabyNames = () => {
  // Declare React Hooks

  const [allNames, setAllNames] = useState(data); // Load Initial data as allNames.
  const [favouriteNames, setFavouriteNames] = useState([]); // Intial favourite Name is an empty array.

  const handleFilter = (e) => {
    let filtered = data.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setAllNames(filtered);
  };

  // Show All Baby Names
  const getAllNames = (babyData) => setAllNames(data);

  // Show all Boys Baby Names
  const getOnlyBoys = () => {
    const filteredData = data.filter((data) => {
      return data.sex === "m";
    });
  };

  // Show all Girls Baby Names
  const getOnlyGirls = () => {
    const filteredData = data.filter((data) => data.sex.toLowerCase() === "f");
  };

  return <Input />;
};
