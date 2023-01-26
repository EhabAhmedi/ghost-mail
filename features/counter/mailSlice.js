import { createSlice } from '@reduxjs/toolkit';


export const mailSlice = createSlice({
  name: 'mail',
  initialState:{
    selectedMail:null,
    sendMessageIsOpen: false,
  },
  
  reducers: {
    selectMail:(state, action)=> {
      state.selectedMail=action.payload
    },
    openSendMessage: (state) => {
      
      state.sendMessageIsOpen=true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen=false;
    },
  },
});

export const { selectMail,openSendMessage, closeSendMessage} = mailSlice.actions;
export const selectOpenMail= (state) => state.mail.selectMail;
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
// export const selectMail =(state) => state.mail.value;




export default mailSlice.reducer;