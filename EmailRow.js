import { Checkbox, IconButton } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/counter/mailSlice";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "./App";


function EmailRow({ id , title, subject , description , message , time }) {

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const openMail= () => {

    dispatch(selectMail({

      id , title, subject , message , time

    }))

    navigate('/mail')
  }
  const { theme }= useContext(ThemeContext)

  return (
    <div onClick={openMail} className='emailRow' id={theme}>

       <div className="emailRow__options">
        
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>

        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>


       </div>


       <div className="emailRow__title">
          {title}
       </div>


       <div className="emailRow__message">
          <h4>{subject}{''}
            <span className="emailRow__description">- 
               {message}
            </span>
          </h4>
       </div>


       <p className="emailRow__time">{time}</p>


    </div>
  )
}

export default EmailRow;
