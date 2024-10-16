import React from "react";
import { SingleProjectCard } from "./SingleProjectCard";

const AllProjectSection = () => {
  return (
    <ul className="h-[78%] overflow-auto flex gap-4 flex-wrap mt-6">
      <SingleProjectCard />
      <SingleProjectCard />
      <SingleProjectCard />
      <SingleProjectCard />
      <SingleProjectCard />
    </ul>
  );
};

export default AllProjectSection;
