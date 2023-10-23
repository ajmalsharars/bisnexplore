"use client";
import { Avatar, Button } from "@mui/material";
import Image from "next/image";
import backg from "../../../../public/images/backg.jpeg";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { signOut, useSession } from "next-auth/react";

import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud";
import MessageIcon from "@mui/icons-material/Message";

function Sidebar() {
  const { data: session } = useSession();

  return (
    <div className="space-y-2 min-w-md max-w-xs shadow-sm">
      {/* Top */}
      <div className="bg-white rounded-lg overflow-hidden relative flex flex-col items-center text-center border border-gray-300 ">
        <div className="relative w-full h-14">
          <Image src={backg} layout="fill" priority />
        </div>
        <Avatar
          src={session?.user?.profilePicture}
          sx={{ width: 100, height: 100 }}
          className="!h-20 !w-20 !border-2 !absolute !top-4 !cursor-pointer"
        />

        <h4 className="text-lg pt-10 pb-2">
          Welcome, {session?.user?.firstName}!
        </h4>
        <Button variant="outlined" size="small" onClick={signOut}>
          Logout
        </Button>
        <div className="hidden md:inline text-left text-sm">
          <div className="font-medium sidebarButton space-y-0.5"></div>
          <Paper sx={{ width: 320, maxWidth: "100%" }}>
            <MenuList>
              <MenuItem>
                <ListItemIcon>
                  <AccountBoxIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Profile</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <MessageIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Messaging</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <SettingsIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Setting</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <Cloud fontSize="small" />
                </ListItemIcon>
                <ListItemText>My Activities</ListItemText>
              </MenuItem>
            </MenuList>
          </Paper>
        </div>
      </div>

      {/* Bottom */}
      <div className="hidden md:flex bg-white  text-black/70 rounded-lg overflow-hidden flex-col space-y-2 pt-2.5 sticky top-20 border border-gray-300 ">
        <div className="pl-3 text-blue-600">
          <p className="sidebarLink">Groups</p>
          <div className="flex items-center justify-between">
            <p className="sidebarLink">Events</p>
            <AddRoundedIcon className="!h-5" />
          </div>
          <p className="sidebarLink">Followed Hashtags</p>
          <div className="sidebarButton text-center">
            <h4 className=" font-medium text-sm my-3">Discover More</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
