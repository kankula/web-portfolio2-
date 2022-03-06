import React from 'react'
import './Menu.css'
import { useState } from "react";

export const Menu = (props) => {
  const[state, setState] = useState(1)
  const clickTab = (index) => {
    setState(index)
    
  }
  props.getState(state)
  return (
    <div >
      <ul className='menu'>
        <li className={state === 1 ? "tab active-t" : "tab"} onClick={() => clickTab(1)}>welcome</li>
        <li className={state === 2 ? "tab active-t" : "tab"} onClick={() => clickTab(2)}>skills</li>
        <li className={state === 3 ? "tab active-t" : "tab"} onClick={() => clickTab(3)}>elucational</li>
      </ul>
    </div>
  )
}

