import React, { createContext, useEffect, useState } from "react";
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
import Toggle from "./Toggle";

export const ThemeContext=React.createContext(null)





function App() {



  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser);

 

  const dispatch = useDispatch();

  useEffect(()=>{

      auth.onAuthStateChanged(firebaseUser => {
        if (firebaseUser){
          
          console.log('any' , firebaseUser)
         
          
          dispatch(login({
            
            displayName: firebaseUser.displayName,
            email : firebaseUser.email ,
            photoUrl : firebaseUser.photoURL
            
          }))

        }
      })

  },[auth])

  const [theme, setTheme]=useState("light")
  
 
  
    return (
      
      <Router>
        <ThemeContext.Provider value={{theme,setTheme}}>
        {!user ?  <Login /> :
        
        
          <div className="app"  >
            
            <Header /> 
  
                  <div className='app__body' >
                      <Sidebar />
                    <Routes>
  
                      <Route path='/mail' element={<Mail />} />
                      <Route path='/' element={ <EmailList />} />
  
  
                    </Routes>
                  
                  </div>
                  
                {sendMessageIsOpen && <Sendmail />}
                
  
            </div>
           
         }
          </ThemeContext.Provider>
      </Router>
    );
  }

export default App;
