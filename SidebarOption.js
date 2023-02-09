import React, { useContext } from 'react'
import InboxIcon from '@mui/icons-material/Inbox';
import { ThemeContext } from './App';


function SidebarOption({Icon, title, number, selected}) {
  const { theme }= useContext(ThemeContext)

  return (
    <div id={theme} className={`sidebarOption ${selected && "sidebarOption--active"}`}>
     {  Icon || <Icon />} 
      <h3>{title}</h3>
      <p>{number}</p>


    </div>
  );
}

export default SidebarOption;