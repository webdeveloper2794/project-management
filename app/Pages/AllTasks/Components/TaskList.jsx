import {
  Cached,
  CheckBox,
  Circle,
  DeleteOutlined,
  EditOutlined,
} from "@mui/icons-material";
import ListIcon from "@mui/icons-material/List";
import React from "react";

const TaskList = () => {
  return (
    <div className="ml-12 max-sm:ml-0 mt-11 flex-col flex gap-4">
      <Tabs />
      <div className="flex flex-col gap-4">
        <SingleTask />
        <SingleTask />
      </div>
    </div>
  );
};

export default TaskList;

const Tabs = () => {
  return (
    <div className="flex  items-center gap-6 ml-3 mt-8 mb-5">
      <div className="flex gap-2 text-green-500 font-semibold">
        <span>On Going Tasks</span>
        <span className="bg-green-200 px-2 text-green-500 max-[420px]:hidden rounded-md">7</span>
      </div>
      <div className="text-slate-400 flex gap-2 items-center">
        <span>Completed Tasks</span>
        <span className="bg-slate-200 px-2  rounded-md max-[420px]:hidden">8</span>
      </div>
    </div>
  );
};

const SingleTask = () => {
  return (
    <div className="flex gap-2 items-center ">
      <CheckBox />
      <div className="w-full bg-white rounded-lg flex gap-3 items-center justify-between p-5 py-6 max-lg:p-4">
        <div className="flex gap-3 items-center ">
          {/* wallet icon */}
          <div>
            <div className="bg-green-200 rounded-lg p-2 flex items-center justify-between">
              <ListIcon className="text-green-500" />
            </div>
          </div>
          {/* wallet name */}
          <div className="flex flex-col">
            <span className="font-bold hover:text-green-500 cursor-pointer max-sm:text-sm">
              Create the UI design
            </span>
            <div className="flex">
              <span className="text-slate-400 text-sm p-[2px]">Project</span>
            </div>
          </div>
        </div>
        {/* Status */}
        <div className="flex gap-36 items-center ">
          <div className="flex gap-2 items-center max-lg:hidden">
            <Cached className="text-[24px] text-slate-400" />
            <span className="capitalize text-sm text-slate-400">
              in progress
            </span>
          </div>

          {/* Priority */}

          <div className="flex gap-2 items-center max-md:hidden">
            <Circle className="text-[10px] text-green-500" />
            <span className="text-sm text-slate-400">Low</span>
          </div>

          {/* action buttons */}

          <div className="flex items-center gap-2">
            {/* edit button */}
            <div className="bg-green-200 hover:bg-green-300 rounded-lg  p-2 flex items-center justify-center cursor-pointer">
              <EditOutlined
                className="text-green-500"
                sx={{ fontSize: "17px" }}
              />
            </div>

            {/* delete button */}
            <div className="bg-red-200 hover:bg-red-300 rounded-lg  p-2 flex items-center justify-center cursor-pointer">
              <DeleteOutlined
                className="text-red-500"
                sx={{ fontSize: "17px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
