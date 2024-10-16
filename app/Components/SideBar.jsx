import React from "react";
import { TaskAlt, BorderAll, Splitscreen, Logout } from "@mui/icons-material";
const SideBar = () => {
  return (
    <div className="w-[97px] h-screen py-8 bg-white flex flex-col items-center justify-between border-r">
      <Logo />
      <Menu />
      <Profile />
    </div>
  );
};

export default SideBar;

function Profile() {
  return <div className="w-7 h-7 bg-green-300 rounded-md"></div>;
}
function Menu() {
  return (
    <div className="flex flex-col gap-6 items-center">
      <BorderAll
        sx={{ fontSize: "27px" }}
        className="text-green-200 cursor-pointer"
      />
      <Splitscreen
        sx={{ fontSize: "25px" }}
        className="text-slate-300 cursor-pointer"
      />
      <Logout
        sx={{ fontSize: "25px" }}
        className="text-slate-300 cursor-pointer"
      />
    </div>
  );
}
function Logo() {
  return (
    <div className="flex items-center justify-center">
      <TaskAlt sx={{ fontSize: "41px" }} className="text-green-300 font-bold" />
    </div>
  );
}
