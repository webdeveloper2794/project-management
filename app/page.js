"use client";
import SideBar from "./Components/SideBar";
import AllProjects from "./Pages/AllProjects/AllProjects";
import AllTasks from "./Pages/AllTasks/AllTasks";
import { useContextApp } from "./Pages/contextApp";
import { ProjectWindow } from "./Components/Windows/ProjectWindow";
import IconsWindow from "./Components/Windows/IconWindow";

export default function Home() {
  const {
    openSideBar,
    sideBarMenu,
    openProjectWindow,
    openIconWindow,
    setOpenProjectWindow,
    setOpenIconWindow,
  } = useContextApp();

  const selectedPage = sideBarMenu.find((item) => item.isSelected);

  return (
    <div className="flex w-full h-screen poppins">
      {/* Modal windows */}
      {openProjectWindow && <ProjectWindow />}
      {openIconWindow && <IconsWindow />}

      {/* Soft gray overlay when either window or sidebar is open */}
      {(openSideBar || openProjectWindow || openIconWindow) && (
        <div
          className={`w-full h-full fixed bg-slate-800 opacity-30 z-[70] transition-all duration-300 ease-in-out`}
          onClick={() => {
            // Close the project and icon windows on clicking the overlay
            setOpenProjectWindow(false);
            setOpenIconWindow(false);
          }}
        ></div>
      )}

      {/* Sidebar */}
      <SideBar />

      {/* Conditional page rendering based on selected menu */}
      {selectedPage?.id === 1 && <AllProjects />}
      {selectedPage?.id === 2 && <AllTasks />}
    </div>
  );
}
