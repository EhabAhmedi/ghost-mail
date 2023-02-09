import React, { useContext } from 'react'
import { ThemeContext } from './App'
function Section({Icon, title, color, selected}) {
  const { theme }= useContext(ThemeContext)

  return (
    <div id={theme} className={`section ${selected && "section--selected"}`}
    style={{
      borderBottom: `3px solid ${color}`,
      color:`${selected && color}`
    }}
    
    >
      <Icon/>
      <h4>{title}</h4>
    </div>
  )
}
 
export default Section