import React from 'react'
import "./SidebarOptions.css"
import InboxIcon from '@mui/icons-material/Inbox';


function SidebarOption({Icon, title, number, selected}) {
  return (
    <div className={`sidebarOption ${selected && "sidebarOption--active"}`}>
     {Icon || <Icon />}
      <h3>{title}</h3>
      <p>{number}</p>


    </div>
  );
}

export default SidebarOption;