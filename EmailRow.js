import { Checkbox, IconButton } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import React from "react";
import "./EmailRow.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/counter/mailSlice";

function EmailRow({ time, title, id, subject, description }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const openMail = () => {
      dispatch(
      selectMail({
        time,
        title,
        id,
        subject,
        description,
      })
    );
    window.location.href = "/mail";
  };
  return (
    <div
      onClick={openMail}
      className="emailRow"
    >
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarOutlineIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <h3 className="emailROw__title">{title}</h3>

      <div className="emailRow__messege">
        <h4>
          {subject}
          {"     "}
          <span className="emailRow__description">-{description}</span>
        </h4>
      </div>
      <p className="emailRow__time">{time}</p>
    </div>
  );
}

export default EmailRow;
