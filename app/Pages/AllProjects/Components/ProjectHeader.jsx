import { Add, Menu, Search } from "@mui/icons-material";
import React from "react";
import { useContextApp } from "../../contextApp";

const ProjectHeader = () => {
  const { setOpenProjectWindow, setOpenSideBar, openSideBar } = useContextApp();
  return (
    <div className="flex justify-between">
      <SearchBar />
      <AddProjectButton />
    </div>
  );

  function SearchBar() {
    return (
      <div className="flex items-center">
        <div className="border-b-2 border-green-500 h-[39px] w-11 justify-center flex items-center">
          <Search
            className="text-slate-400 outline-none"
            sx={{ fontSize: "26px" }}
          />
        </div>
        <div className="border-b-2 w-[67%] border-slate-200">
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
    return (
      <div className="flex gap-3 items-center">
        <button
          onClick={() => setOpenProjectWindow(true)}
          className="bg-green-100  text-green-500 font-light px-2 py-2 pr-3 max-sm:pr-2 text-[14px] rounded-md flex items-center gap-1"
        >
          <Add sx={{ fontSize: "22px" }} />
          <span className="max-sm:hidden">New Project</span>
        </button>
        <button
          onClick={() => setOpenSideBar(!openSideBar)}
          className="hidden max-sm:block"
        >
          <Menu className="text-slate-400" />
        </button>
      </div>
    );
  }
};

export default ProjectHeader;
