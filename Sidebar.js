import React, { useContext } from "react"
import { Button, IconButton } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonICon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import SidebarOption from './SidebarOption';
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/counter/mailSlice";
import { ThemeContext } from "./App";


function Sidebar() {
  const dispatch= useDispatch();
  const {theme} = useContext(ThemeContext)
  return (
    <div className='sidebar' id={theme}>
      <Button startIcon={<CreateIcon className="compose__icon" fontSize="large"
      />} className='sidebar__compose'
      onClick={()=> dispatch (openSendMessage())}>
        
        Compose
      </Button>

      
      <SidebarOption  Icon={<InboxIcon className="selcted__inbox"/>} 
      title="Inbox" 
      number={54} 
      selected={true}/>
      <SidebarOption Icon={<StarIcon />}  title="Starred" number={54} />
      <SidebarOption Icon={<AccessTimeIcon />} title="Snoozed" number={54}/>
      <SidebarOption Icon={<LabelImportantIcon />} title="Important" number={54}/>
      <SidebarOption Icon={<NearMeIcon />} title="Sent" number={54}/>
      <SidebarOption Icon={<NoteIcon />} title="Drafts" number={54}/>
      <SidebarOption Icon={<ExpandMoreIcon />} title="More" number={54}/>
      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonICon/>
          </IconButton>
          
          <IconButton>
            <DuoIcon/>
          </IconButton>
          <IconButton>
            <PhoneIcon/>
          </IconButton>

        </div>


      </div>



    </div>
  )
}

export default Sidebar