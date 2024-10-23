'use client'
import React from "react";
import { Add, Menu, Search } from "@mui/icons-material";
import { useContextApp } from "../../contextApp";
const TaskHeader = () => {
  return (
    <div className="flex justify-between">
      <SearchBar />
      <AddProjectButton />
    </div>
  );
};

export default TaskHeader;

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
          placeholder="Search a Task..."
          className="p-2 bg-transparent text-[14px] outline-none"
        />
      </div>
    </div>
  );
}

function AddProjectButton() {
  const { setOpenSideBar, openSideBar } = useContextApp();
  console.log(openSideBar);
  
  
  return (
    <div className="flex gap-3  max-sm:items-center">
      <button className="bg-green-100  text-green-500 font-light px-2 max-sm:py-1.5 pr-3 max-sm:pr-2 text-[14px] rounded-md flex items-center gap-1">
        <Add sx={{ fontSize: "22px" }} />
        <span className="max-sm:hidden">New Tasks</span>
      </button>
      <Menu className="text-slate-400 h-9 cursor-pointer hidden max-sm:block" onClick={() => setOpenSideBar(!openSideBar)} />
    </div>
  );
}
