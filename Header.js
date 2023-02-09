import React, { createContext, useContext, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar,Button,IconButton } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { logout, selectUser } from "./features/counter/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import ghost  from "./assets/ghost.png"
import { ThemeContext } from "./App.js";
import Toggle from "./Toggle";

 
// export const ThemeContext=createContext(null)



function Header() {
 
  const { theme }= useContext(ThemeContext)
  
  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  const signOut= ()=> {

      auth.signOut().then(()=> {

          dispatch(logout())

      })

  }
  
  return (
    
    <div   className="header" id={theme}>
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img className="dark__logo"
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
        <Toggle> </Toggle>
       
     
        
        <IconButton >
          <AppsIcon className="header__rightIcon"></AppsIcon>
        </IconButton>
        <IconButton >
          <NotificationsIcon className="header__rightIcon"></NotificationsIcon>
        </IconButton>
        <div className="avatar__wrapper">
        <Avatar onClick={signOut} src={user?.photoUrl} className="header__avatar" /> <p>Log out</p>
        </div>
        
      </div>
    </div>
    
  );
}

export default Header;
