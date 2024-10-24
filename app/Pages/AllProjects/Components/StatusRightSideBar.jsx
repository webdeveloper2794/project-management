import { Splitscreen } from "@mui/icons-material";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 50;
const StatusRightSideBar = () => {
  return (
    <div className="w-[22%] flex justify-end items-center max-lg:hidden ">
      <div className="h-[92%] w-[94%] bg-white rounded-l-3xl p-3 flex flex-col">
        <Header />
        <div className="flex flex-col gap-11 items-center justify-center mt-6">
          {/* <CircularChart /> */}
          <div className="w-40 h-40  mt-5 rounded-full flex items-center justify-center">
            <div className="w-[86%] flex justify-center items-center h-[86%] bg-white rounded-full shadow-xl">
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "round",

                  // Text size
                  textSize: "16px",

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  pathColor: `rgba(34, 197, 94,0.8)`,
                  textColor: "rgb(34, 197, 94)",
                  trailColor: "#edeef0",
                })}
              />
            </div>
          </div>

          <ProjectsCompletedLabels />
        </div>
        <ProjectsLists />
      </div>
    </div>
  );
};

function Header() {
  return (
    <h2 className="text-[22px] font-bold text-center mt-7">
      Projects Completed
    </h2>
  );
}
function CircularChart() {
  return (
    <div className="flex justify-center items-center">
      <div></div>
    </div>
  );
}
function ProjectsCompletedLabels() {
  return (
    <div className="flex justify-center flex-col gap-1 items-center">
      <p className="font-bold text-lg">3 Completed</p>
      <p className="text-sm text-slate-400">20 Tasks done</p>
    </div>
  );
}
function ProjectsLists() {
  return (
    <ul className="flex flex-col gap-3 mt-16 mx-4 overflow-auto">
      <SingleProjct />
      <hr className="w-[80%] mx-auto text-slate-100 opacity-50" />
      <SingleProjct />
      <hr className="w-[80%] mx-auto text-slate-100 opacity-50" />
      <SingleProjct />
    </ul>
  );
}

function SingleProjct() {
  return (
    <li className="p-3 flex gap-2 items-center">
      <div className="w-8 h-8 bg-green-200 rounded-md flex items-center justify-center text-green-500">
        <Splitscreen />
      </div>
      <ul>
        <li className="text-sm font-semibold">Project 1</li>
        <li className="text-[12px] text-slate-400 ">Tasks</li>
      </ul>
    </li>
  );
}

export default StatusRightSideBar;
