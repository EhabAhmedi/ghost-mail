import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar,IconButton } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { logout, selectUser } from "./features/counter/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import ghost  from "./assets/ghost.png"


function Header() {
  const user = useSelector(selectUser)
  const dispatch= useDispatch()
  const signOut= ()=>{
    auth.signOut().then(()=>{
        dispatchEvent(logout())
    })
  

  }
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src={ghost}
          alt=""
        />
      </div>

      <div className="header__middle">
        <SearchIcon />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDownIcon className="header__inputCaret"></ArrowDropDownIcon>
      </div>

      <div className="header__right">
        
        <IconButton >
          <AppsIcon className="header__rightIcon"></AppsIcon>
        </IconButton>
        <IconButton >
          <NotificationsIcon className="header__rightIcon"></NotificationsIcon>
        </IconButton>
        <Avatar onClick={signOut} src={user?.photoUrl} className="header__rightIcon"></Avatar>
        
      </div>
    </div>
  );
}

export default Header;
