import React, { useContext } from 'react';
import {UPDATE_COLOR, ColorContext} from './color'

function Buttons() {
  const { dispatch } = useContext(ColorContext)
    return(
      <div>
        <button onClick={()=> {dispatch({type: UPDATE_COLOR, color: 'red'})}}>红色按钮</button>
        <button onClick={()=> {dispatch({type: UPDATE_COLOR, color: 'green'})}}>绿色按钮</button>
      </div>
    )
}

export default Buttons;