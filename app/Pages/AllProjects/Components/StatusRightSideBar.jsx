import React from "react";

const StatusRightSideBar = () => {
  return (
    <div>
      <div>
        <Header />
        <div>
          <CircularChart />
          <ProjectsCompletedLabels />
        </div>
      </div>
    </div>
  );
};

export default StatusRightSideBar;

function Header() {
  return (
    <h2 className="text-[22px] font-bold text-center mt-7">
      Projects Completed
    </h2>
  );
}
function CircularChart() {
  return (
    <div className="text-[22px] font-bold text-center mt-7">
      <div className="w-40 h-40 bg-slate-100 mt-5 roundedful">
        <div className="w-[86%] flex justify-center items-center h-[86%] bg-white rounded-full">
            <span className="text-xl font-semibold text-green-500">90%</span>
        </div>
      </div>
    </div>
  );
}
function ProjectsCompletedLabels() {
  return (
    <h2 className="text-[22px] font-bold text-center mt-7">
      Projects Completed
    </h2>
  );
}
