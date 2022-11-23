import React, { useState } from 'react'
import { UseBackgroundContext } from '../../hook/useBackground'
import './style.css'
const Switcher = () => {
    const [ligth, setLight] = useState(true)
    const {dispatch} = UseBackgroundContext()
    const HandleTurnon = ()=>{
        setLight((s) => !s)
        dispatch({type: ligth})
    }
    

  return (
    <div className="theme-switcher">
      
        <input type="checkbox" id="switcher" onClick={HandleTurnon}/>
        <label for="switcher"></label>
    </div>    

  )
}

export default Switcher