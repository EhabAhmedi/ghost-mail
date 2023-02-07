import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Mail from "./Mail";
import EmailList from "./EmailList";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/counter/mailSlice";
import { login, selectUser } from "./features/counter/userSlice";
import Login from "./Login";
import { auth } from "./firebase";
import Sendmail from "./SendMail";






function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser);

 

  const dispatch = useDispatch();

  useEffect(()=>{

      auth.onAuthStateChanged(firebaseUser => {
        if (firebaseUser){
          
          console.log('any' , firebaseUser)
          //logined idit
          
          dispatch(login({
            
            displayName: firebaseUser.displayName,
            email : firebaseUser.email ,
            photoUrl : firebaseUser.photoURL
            
          }))

        }
      })

  },[auth])
    return (
      <Router>
        {!user ?  <Login /> :
        
          <div className="app">
            <Header/>
  
                  <div className='app__body'>
                      <Sidebar />
                    <Routes>
  
                      <Route path='/mail' element={<Mail />} />
                      <Route path='/' element={ <EmailList />} />
  
  
                    </Routes>
                  
                  </div>
                  
                {sendMessageIsOpen && <Sendmail />}
                
  
            </div>
         }
      </Router>
    );
  }

export default App;
