import React from "react";
import { AppBar, Grid, Toolbar, IconButton, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HomeIcon from "@mui/icons-material/Home";
import NetworkIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HandshakeIcon from "@mui/icons-material/Handshake";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MessageIcon from "@mui/icons-material/Message";
import logo from "../../../../public/images/logo_dashboard.svg";
import Image from "next/image";

const Header = () => {
  return (
    <AppBar position="sticky" className="mb-6">
      <Toolbar className="px-10">
        <IconButton edge="start" color="inherit" aria-label="LinkedIn">
          <Image src={logo} alt="" height={35} width={35} />
        </IconButton>

        <div className="flex items-center space-x-1 bg-blue-400 py-2 px-4 rounded-full w-auto">
          <SearchRoundedIcon />
          <input
            type="text"
            placeholder="Search"
            className="hidden md:inline-flex bg-transparent text-md  focus:outline-none placeholder-white flex-grow"
          />
        </div>
        <Grid container justifyContent="flex-end">
          <IconButton
            color="inherit"
            aria-label="Home"
            className="flex flex-col"
          >
            <HomeIcon />
            <Typography variant="caption">Home</Typography>
          </IconButton>

          <IconButton
            color="inherit"
            aria-label="Home"
            className="flex flex-col"
          >
            <BusinessCenterIcon />
            <Typography variant="caption">My Business</Typography>
          </IconButton>

          <IconButton
            color="inherit"
            aria-label="Home"
            className="flex flex-col"
          >
            <HandshakeIcon />
            <Typography variant="caption">My Partner</Typography>
          </IconButton>

          <IconButton
            color="inherit"
            aria-label="My Network"
            className="flex flex-col"
          >
            <NetworkIcon />
            <Typography variant="caption">My Network</Typography>
          </IconButton>

          <IconButton
            color="inherit"
            aria-label="Notifications"
            className="flex flex-col"
          >
            <NotificationsIcon />
            <Typography variant="caption">Notifications</Typography>
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
