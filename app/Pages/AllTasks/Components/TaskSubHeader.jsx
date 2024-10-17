import { KeyboardArrowDown, Splitscreen } from "@mui/icons-material";
import React from "react";

const TaskSubHeader = () => {
  return (
    <div className=" mt-24 flex justify-between items-center">
      <MyProjectsText />
      <SortByButton />
    </div>
  );
};

export default TaskSubHeader;

function MyProjectsText() {
  return (
    <div>
      <div className="w-[41px] h-[44px] -mt-1  bg-green-200 flex justify-center items-center rounded-md">
        <Splitscreen className="text-green-500" sx={{ fontSize: "21px" }} />
      </div>

      <ul className="flex flex-col gap-2">
        <li className="text-[17px] font-semibold flex items-center gap-2">
          <div className="text-slate-700 flex  gap-2 items-center">
            <span className="text-lg">All Projects</span>
            <span className="bg-slate-700 text-white text-sm p-[2px] px-2 rounded-md">
              6
            </span>
          </div>
          <KeyboardArrowDown className="text-slate-600 text-lg" />
        </li>
        <div className="flex gap-1 items-center">
          <li className="text-[12px] h-[4px] w-[280px] bg-slate-200 rounded-md overflow-auto">
            <div className="w-1/2 h-[100%] bg-green-200 rounded-r-xl">

            </div>
          </li>
          <p className="text-[12px] text-slate-400 ml-3">20% completed</p>
        </div>
      </ul>


    </div>
  );
}
function SortByButton() {
  return (
    <div className="flex text-[15px] gap-3">
      <span className="text-slate-300">Sort By</span>
      <div className="flex gap-1 items-center cursor-pointer">
        <span className="text-slate-800">Recent Project</span>
        <KeyboardArrowDown sx={{ fontSize: "19px" }} />
      </div>
    </div>
  );
}
