import { Add, Search } from "@mui/icons-material";
import React from "react";

const ProjectHeader = () => {
  return (
    <div className="flex justify-between">
      <SearchBar />
      <AddProjectButton />
    </div>
  );
};

export default ProjectHeader;

function SearchBar() {
  return (
    <div className="flex items-center">
      <div className="border-b-2 border-green-500 h-[39px] w-11 justify-center flex items-center">
        <Search
          className="text-slate-400 outline-none"
          sx={{ fontSize: "26px" }}
        />
      </div>
      <div className="border-b-2 border-slate-200">
        <input
          type="text"
          placeholder="Search a project..."
          className="p-2 bg-transparent text-[14px] outline-none"
        />
      </div>
    </div>
  );
}


function AddProjectButton() {
    return(
        <button className="bg-green-100  text-green-500 font-light px-2 pr-3 text-[14px] rounded-md flex items-center gap-1">
            <Add sx={{fontSize: "22px"}}/>
            <span>New Project</span></button>
    )
}