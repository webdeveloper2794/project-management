"use client";
import {
  Circle,
  Delete,
  Edit,
  LibraryAdd,
  MoreVert,
  Splitscreen,
} from "@mui/icons-material";
import React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useContextApp } from "../../contextApp";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const ITEM_HEIGHT = 48;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
export const SingleProjectCard = () => {
  return (
    <li className="w-[300px] max-md:w-[96%] h-[306px] flex flex-col gap-8 rounded-lg p-7 bg-white">
      <ProjectCardHeader />
      <ProjectCardBody />
      <ProjectCardFooter />
    </li>
  );
};

function ProjectCardHeader() {
  const { setOpenProjectWindow } = useContextApp();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true); // Open delete modal only
    setAnchorEl(null); // Close the menu
  };
  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false); // Close delete modal
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); // Open the menu
  };

  // Open Project Edit modal
  const handleEditProject = () => {
    setAnchorEl(null); // Close the menu
    setOpenProjectWindow(true); // Open project edit modal
  };

  const handleCloseMenu = () => {
    setAnchorEl(null); // Close the menu
  };

  return (
    <div className="flex justify-between items-center">
      {/* title and icon */}
      <div className="flex gap-3 items-center">
        {/* icon */}
        <div className="bg-green-200 flex justify-center items-center w-[38px] h-[38px] rounded-md">
          <Splitscreen className="text-green-500" sx={{ fontSize: "19px" }} />
        </div>
        {/* title */}
        <header className="flex flex-col">
          <span className="font-semibold text-[19px]">Project Title</span>
          <span className="text-slate-400 text-[13px]">2 days ago</span>
        </header>
      </div>

      <div>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVert />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseMenu}
          slotProps={{
            paper: {
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            },
          }}
        >
          <MenuItem onClick={handleEditProject} disableRipple>
            <Edit />
            Edit
          </MenuItem>
          <MenuItem
            onClick={handleOpenDeleteModal}
            disableRipple
            className="text-slate-400"
          >
            <Delete sx={{ gap: "2px" }} />
            Delete
          </MenuItem>
        </Menu>

        {/* Delete confirmation modal */}
        <Modal
          open={openDeleteModal}
          onClose={handleCloseDeleteModal}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 200 }}>
            <h2 id="child-modal-title">Confirm Deletion</h2>
            <p id="child-modal-description">
              Are you sure you want to delete this project?
            </p>
            <Button onClick={handleCloseDeleteModal}>Cancel</Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleCloseDeleteModal}
            >
              Confirm Delete
            </Button>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

function ProjectCardBody() {
  const { setOpenProjectWindow } = useContextApp();
  const handleAddProject = () => {
    setOpenProjectWindow(true);
  };
  return (
    <div className="h-[80px] flex flex-col gap-3 mb-1">
      {/* this part shows when there is no task yet */}
      <div className="flex justify-center flex-col gap-3 mt-[15px] items-center h-full">
        <LibraryAdd
          className="text-slate-400 opacity-40 text-2xl cursor-pointer hover:opacity-100 transition-all ease-in-out duration-300"
          onClick={handleAddProject}
        />
        <span className="text-slate-400 opacity-45 text-sm">
          No tasks created yet...
        </span>
      </div>

      {/* <ul className="text-slate-400  text-[13px] flex flex-col gap-2 ml-3 ">
        <li className="flex gap-2 items-center">
          <Circle className="text-[8px]" />
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </li>
        <li className="flex gap-2 items-center">
          <Circle className="text-[8px]" />
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </li>
      </ul> */}

      {/* this is display if the list of the tasks are more than 3, as it does not show in the main card comp */}
      <div className="text-[11px] text-slate-400">
        <span className="text-green-500">+ tasks</span>
      </div>
    </div>
  );
}

function ProjectCardFooter() {
  return (
    <div className="flex flex-col gap-4 mt-2 ">
      <div className="text-[12px] gap-3 items-center flex w-full">
        <div className="w-full h-[7px] rounded-xl bg-slate-100 overflow-hidden">
          <div className="w-1/2 bg-green-200 h-full rounded-r-xl"></div>
        </div>
      </div>

      <div className="flex justify-between">
        <p className="text-[13px] text-slate-400">On Progress</p>
        <div className="flex gap-1 text-[13px]">
          <p>78%</p>
        </div>
      </div>
    </div>
  );
}
