"use client";
import { useContextApp } from "@/app/Pages/contextApp";
import { BorderAll, CloseOutlined, LibraryBooks } from "@mui/icons-material";
import React, { useEffect, useLayoutEffect } from "react";
import {
  useForm,
  SubmitHandler,
  UseFormRegister,
  FielErrors,
} from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getIconComponent } from "../functions/IconsActions";

const schema = z.object({
  projectName: z
    .string()
    .min(1, { message: "Project Name is required" })
    .max(30, { message: "Project name msut be 30 characters long or less" }),
});
export const ProjectWindow = () => {
  const {
    openProjectWindow,
    setOpenProjectWindow,
    openIconWindow,
    setOpenIconWindow,
    selectedIcon,
    setSelectedIcon,
  } = useContextApp();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: zodResolver(schema),
  });

  console.log("icon window state",openIconWindow);
  
  const onSubmit = (data) => {
    console.log("Form submitted with data:", data);

    handleClose();
  };
  const handleClose = () => {
    

    setOpenProjectWindow(false);
    reset();
  };

  useLayoutEffect(() => {
    if (openProjectWindow) {
      reset();
    }
  }, [openProjectWindow, reset]);

  return (
    <div
      className={` ${
        openProjectWindow ? "block" : "hidden"
      } w-[48%] max-sm:w-[82%] max-[600px]:w-[93%] z-[80] p-3 left-1/2 top-[47%] -translate-y-1/2 -translate-x-1/2 absolute flex flex-col gap-3 border border-slate-50 rounded-lg shadow-md bg-white`}
    >
      {/* header */}
      <Header />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 pt-8 px-7 mt-3 bg-white"
      >
        <ProjectInput />
        <Footer />
      </form>
    </div>
  );

  function Header() {
    return (
      <div className="flex justify-between items-center pt-7 px-7">
        <div className="flex items-center gap-2">
          <div className="p-[7px] bg-green-200 rounded-lg flex items-center justify-center">
            <BorderAll
              className="text-green-500"
              sx={{ fontSize: "21px" }}
              onClick={() => setOpenProjectWindow(false)}
            />
          </div>
          <span className="font-semibold text-lg">Add Project</span>
        </div>
        <CloseOutlined
          className="text-slate-300 cursor-pointer"
          sx={{ fontSize: "18px" }}
          onClick={() => {
            setSelectedIcon(null);
            handleClose();
          }}
        />
      </div>
    );
  }

  function ProjectInput() {
    useEffect(() => {
      const inputElement = document.querySelector('input[name="projectName"]');
      if (inputElement) {
        inputElement.focus();
      }
    }, [openProjectWindow]);
    return (
      <div className="flex flex-col gap-2">
        <span className="text-[14px] font-medium text-slate-600">
          Project Name
        </span>
        <div className="flex gap-3 justify-between">
          <div className="w-full">
            <input
              {...register("projectName")}
              placeholder="Enter Project Name..."
              className="p-[10px] text-[13px] w-full rounded-md border outline-none"
            />
            {errors.projectName && (
              <p className="text-[11px] mt-2 text-red-500">
                {errors.projectName.message}
              </p>
            )}
          </div>
          {/* icons */}
          <div
            className="w-12 h-10 text-white flex items-center justify-center bg-green-500 rounded-lg cursor-pointer "
            onClick={() => setOpenIconWindow(true)}
          >
            {selectedIcon ? (
              getIconComponent(selectedIcon?.name, "text-white")
            ) : (
              <LibraryBooks />
            )}
          </div>
        </div>
      </div>
    );
  }

  function Footer() {
    return (
      <div className="w-[102%] p-[12px] mt-8 mb-4 flex gap-3 justify-end items-center">
        <button
          onClick={() => {
            setSelectedIcon(null);
            handleClose();
          }}
          className="border border-slate-200 text-slate-400 text-sm p-2 px-6 rounded-md hover:border-slate-300 transition-all"
        >
          Cancel
        </button>
        <button className="bg-green-200 hover:bg-green-300 text-green-500 text-sm p-2 px-4 rounded-md hover:text-green-600 transition-all">
          Add Project
        </button>
      </div>
    );
  }
};
