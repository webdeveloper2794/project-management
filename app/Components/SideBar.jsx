
import React, { useRef, useEffect } from "react";
import {
  TaskAlt,
  BorderAll,
  Splitscreen,
  Logout,
  Key,
} from "@mui/icons-material";
import { useContextApp } from "../Pages/contextApp";
const SideBar = () => {
  const { openSideBar, setOpenSideBar, sideBarMenu, setSideBarMenu } =
    useContextApp();
  const sideBarMenuRef = useRef(null);


  useEffect(() => {
    function handleClickOutside(e) {
      if (
        sideBarMenuRef.current &&
        !sideBarMenuRef.current.contains(e.target)
      ) {
        setOpenSideBar(false);
      }
    }

    if (openSideBar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openSideBar, setOpenSideBar]);

  return (
    <div
      ref={sideBarMenuRef}
      className={`${
        openSideBar ? "w-[280px] fixed shadow-xl" : "w-[97px] max-sm:hidden"
      }  h-screen py-8 bg-white flex flex-col items-center justify-between z-[90]`}
    >
      <Logo />
      <Menu />
      <Profile />
    </div>
  );

  function Profile() {
    return (
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 bg-green-300 rounded-md"></div>
        {openSideBar && (
          <ul>
            <li className="font-semibold text-sm">Abdurrohman</li>
            <li className="text-slate-400 text-[10px]">
              webdeveloper2794@gmail.com
            </li>
          </ul>
        )}
      </div>
    );
  }
  function Menu() {
    function handleClickItem(id) {
      const updateMenuSideBar = sideBarMenu.map((item) => {
        if (item.id === id) {
          return { ...item, isSelected: true };
        }
        return { ...item, isSelected: false };
      });
      setSideBarMenu(updateMenuSideBar);
    }
    return (
      <div className="flex flex-col gap-6">
        {sideBarMenu &&
          sideBarMenu.map((item) => (
            <div
              className={` ${
                item.isSelected ? "text-green-400" : "text-slate-400"
              } flex items-center gap-2 cursor-pointer`}
              onClick={() => {
                if (item.id === 1 || item.id === 2) {
                  handleClickItem(item.id);
                }
              }}
              key={item.id}
            >
              <span className="text-xl">{item.icon}</span>
              {openSideBar && <span>{item.name}</span>}
            </div>
          ))}
      </div>
    );
  }
  function Logo() {
    return (
      <div className="flex items-center gap-2 justify-center">
        <TaskAlt
          sx={{ fontSize: "41px" }}
          className="text-green-300 font-bold"
        />
        {openSideBar && (
          <div className="text-xl flex items-center gap-1">
            <span className="font-bold">Project</span>
            <span className="text-slate-600">Master</span>
          </div>
        )}
      </div>
    );
  }
};
export default SideBar;
