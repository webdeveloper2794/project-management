import { KeyboardArrowDown } from "@mui/icons-material";
import React from "react";

const ProjectSUbHeader = () => {
  return (
    <div className="flex justify-between items-center mt-20">
      <MyProjectsText />
      <SortByButton />
    </div>
  );
};

export default ProjectSUbHeader;

function MyProjectsText() {
  return <p className="text-[26px] font-semibold">My Projects</p>;
}
function SortByButton() {
  return <div className="flex text-[15px] gap-3">
    <span className="text-slate-300">Sort By</span>
    <div className="flex items-center cursor-pointer">
        <span className="text-slate-800">Recent Project</span>
        <KeyboardArrowDown sx={{fontSize: "19px"}}/>
    </div>
  </div>;
}
