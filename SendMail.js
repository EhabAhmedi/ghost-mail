import React from "react";
import "./sendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/counter/mailSlice";
import { db } from "./firebase";
import firebase from 'firebase'

function SendMail() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    console.log(formData);
    db.collection('emails').add({
      to:formData.to,
      subject:formData.subject,
      message:formData.message,
      timestamp: firebase.firestore.fieldValue.serverTimestamp(),
    })
    dispatch(closeSendMessage())
  };
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon onClick={() => dispatch(closeSendMessage())} className="sendMail__close" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="email"
          {...register("name value", { required: true })}
        />
        {errors.to && <p className="sendMail__error">To is Rquired!</p>}
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          {...register("name value", { required: true })}
        />
        {errors.subject && (
          <p className="sendMail__error">Subject is Rquired!</p>
        )}
        <input
          name="message"
          placeholder="Message..."
          type="text"
          className="sendMail__message"
        
          {...register("name value", { required: true })}
        />
        {errors.message && (
          <p className="sendMail__error">Message is Rquired!</p>
        )}
        <div className="sendMail__options">
          <Button
            className="sendMial__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
