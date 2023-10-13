import React, { useState } from "react";
import { Box, Menu, MenuItem, Typography } from "@mui/material";
import { LuLogOut } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";

function Profile({ account, setAccount }) {
  const [open, setOpen] = useState(false);
  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };

  const logoutUser = () => {
    setAccount("");
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box color="black" display="flex" onClick={handleClick}>
        <Typography marginRight="0.5rem">{account}</Typography>
        <IoIosArrowDown
          onClick={handleClick}
          style={{ marginTop: "0.3rem", cursor: "pointer", fontSize: "12px" }}
        />
      </Box>
      <Menu
        sx={{ mt: "5px" }}
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            logoutUser();
          }}
        >
          <LuLogOut />
          <Typography fontSize="14px" marginLeft="13px">
            Logout
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
}

export default Profile;
