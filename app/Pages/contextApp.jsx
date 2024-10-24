"use client";
// This is a Next.js directive that indicates this component is a client-side component.

import { createContext, useContext, useState, useEffect } from "react";

import { BorderAll, Splitscreen, Logout } from "@mui/icons-material";
import { allIcons } from "../Components/Data/AllIcons";
// Imports necessary hooks and functions from React:
// - `createContext`: to create a context
// - `useContext`: to access context values in other components
// - `useState`: to manage component state

// Creates an object `defaultState` with the initial values for the context
// Setting the default state
const defaultState = {
  openSideBar: false,
  setOpenSideBar: () => {},
  sideBarMenu: [],
  setSideBarMenu: () => {},
  openProjectWindow: false,
  setOpenProjectWindow: () => {},
  allIconsData: [],
  setAllIconsData: () => {},
  openIconWindow: false,
  setOpenIconWindow: () => {},
  selectedIcon: null,
  setSelectedIcon: () => {},
};

// Creating the context
const ContextApp = createContext(defaultState);

// Provider component to wrap your app
export default function ContextAppProvider({ children }) {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [sideBarMenu, setSideBarMenu] = useState([
    {
      id: 1,
      name: "All Projects",
      isSelected: true,
      icon: <BorderAll />, // Store the icon JSX directly
    },
    {
      id: 2,
      name: "All Tasks",
      isSelected: false,
      icon: <Splitscreen />,
    },
    {
      id: 3,
      name: "Logout",
      isSelected: false,
      icon: <Logout />,
    },
  ]);

  const [openProjectWindow, setOpenProjectWindow] = useState(false);
  const [openIconWindow, setOpenIconWindow] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [allIconsData, setAllIconsData] = useState(allIcons);
  //   Update window size
  useEffect(() => {
    function handleWindowSizeChange() {
      setIsMobileView(window.innerWidth <= 640);
    }

    // intial check
    handleWindowSizeChange();

    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  //close the side bar on mobile view is false
  useEffect(() => {
    if (!isMobileView) {
      setOpenSideBar(false);
    }
  }, [isMobileView]);

  useEffect(() => {
    setOpenSideBar(false);
  }, [sideBarMenu]);

  return (
    <ContextApp.Provider
      value={{
        openSideBar,
        setOpenSideBar,
        sideBarMenu,
        setSideBarMenu,
        openProjectWindow,
        setOpenProjectWindow,
        allIconsData,
        setAllIconsData,
        openIconWindow,
        setOpenIconWindow,
        selectedIcon,
        setSelectedIcon,
      }}
    >
      {children}
    </ContextApp.Provider>
  );
}

// Custom hook to use the context
export function useContextApp() {
  return useContext(ContextApp);
}
