"use client";
import Image from "next/image";
import SideBar from "./Components/SideBar";
import AllProjects from "./Pages/AllProjects/AllProjects";
import AllTasks from "./Pages/AllTasks/AllTasks";
import { useContextApp } from "./Pages/contextApp";
export default function Home() {
  const { openSideBar, sideBarMenu } = useContextApp();
  const slectedPage = sideBarMenu.find((item) => item.isSelected);
  return (
    <div className="flex w-full h-screen poppins">
      {/* soft gray layer */}

      {openSideBar && (
        <div className="w-full h-full z-50 bg-slate-800 fixed opacity-30"></div>
      )}

      <SideBar />
      {slectedPage?.id === 1 && <AllProjects />}
      {slectedPage?.id === 2 && <AllTasks />}
    </div>
  );
}
