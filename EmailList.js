import React, { useEffect, useState } from "react";

import { Checkbox, IconButton } from "@mui/material";
import "./EmailList.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftICon from "@mui/icons-material/ChevronLeft";
import ChevronRightICon from "@mui/icons-material/ChevronRight";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { db } from "./firebase";

function EmailList() {
  const [emails, setEmails] = useState([]);
  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeftICon />
          </IconButton>
          <IconButton>
            <ChevronRightICon />
          </IconButton>

          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Primary" color="#1A73E8" />
        <Section Icon={LocalOfferIcon} title="Primary" color="green" />
      </div>
      <div className="emailList__list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(emails.timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
        <EmailRow
          title="twitch"
          subject="hey fellow streamer!"
          description="this is a test"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="hey fellow streamer!"
          description="this is a test"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="hey fellow streamer!"
          description="this is a test"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="hey fellow streamer!"
          description="this is a test"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="hey fellow streamer!"
          description="this is a test"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="hey fellow streamer!"
          description="this is a test"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="hey fellow streamer!"
          description="this is a test"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="hey fellow streamer!"
          description="this is a test"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="hey fellow streamer!"
          description="this is a test"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="hey fellow streamer!"
          description="this is a test"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="hey fellow streamer!"
          description="this is a test"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="hey fellow streamer!"
          description="this is a test"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="hey fellow streamer!"
          description="this is a test"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="hey fellow streamer!"
          description="this is a test"
          time="10pm"
        />
        
      
      </div>
    </div>
  );
}

export default EmailList;
