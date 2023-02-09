import React, { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/counter/mailSlice";
import { db } from "./firebase";
import firebase from 'firebase'
import { ThemeContext } from "./App";


function Sendmail() {
  const { theme }= useContext(ThemeContext)

  const { register , handleSubmit , watch , formState : {errors}} = useForm();
  const dispatch = useDispatch();
  

  const onSubmit = (formData) => {

   db.collection('emails').add(
    {

      to:formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamps: firebase.firestore.FieldValue.serverTimestamp(),

   });

   dispatch(closeSendMessage())
  }

  return (
    <div className='sendMail' id={theme}>

        <div className="sendMail__header">
            <h3>New Message</h3>
            <CloseIcon onClick={() =>  dispatch(closeSendMessage())}  className='sendMail__close'/>

        </div>

        <form onSubmit={handleSubmit(onSubmit)}>

          {errors.to && <p className='sendMail__error'>To is Required</p>}
          <input name='to'   placeholder='To' type="email" {...register('to',{required : true})} />
          {errors.subject && <p className='sendMail__error'>subject is Required</p>}
          <input  name='subject' placeholder='Subject' type="text"  {...register('subject',{required : true})} />

          {errors.message && <p className='sendMail__error'>Message is Required</p>}
          <input name='message' placeholder='Message...' type="text" className='sendMail__message' {...register('message',{required : true})} />

          <div className="sendMail__options">
            <Button className='sendMail__send' variant='contained' color='primary' type='submit'>Send</Button>
          </div>
        </form>
    </div>
  )
}

export default Sendmail;
