import { Apps, Close } from "@mui/icons-material";
import React from "react";
import AllIcons from "../Data/AllIcons";
import { useContextApp } from "@/app/Pages/contextApp";

const IconsWindow = () => {
  const {openIconWindow, setOpenIconWindow } = useContextApp();
  return (
    <div
      className={`${openIconWindow ? "block": "hidden"} absolute p-3 h-[530px] w-[50%] max-sm:w-[90%] bg-white shadow-md  rounded-lg left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  z-[90]`}
    >
      {/* header */}
      <Header />
      <span className="mx-8 text-sm mt-12 text-slate-400">{`Please select the icon you'd like to use from the collection below:`}</span>

      {/* all icons here */}
      <IconsArea />
    </div>
  );

  function Header() {
    return (
      <div className="flex justify-between items-center pt-7 px-7 mb-8">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-green-200 rounded-lg flex items-center justify-center">
            <Apps sx={{ fontSize: 21 }} className="text-green-500 text-base" onClick={()=> setOpenIconWindow(false)}/>
          </div>
          <span className="font-semibold text-lg">All Icons</span>
        </div>
        <Close className="text-slate-400 text-base cursor-pointer" onClick={()=> setOpenIconWindow(false)} />
      </div>
    );
  }

  function IconsArea() {
    return (
      <div className="w-full flex flex-col items-center mt-3">
        <div className="border border-slate-100 w-[92%] h-[330px] overflow-auto rounded-md bg-slate-100">
          <AllIcons />
        </div>
      </div>
    );
  }
};

export default IconsWindow;
