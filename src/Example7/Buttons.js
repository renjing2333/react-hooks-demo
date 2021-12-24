// import React, { Component } from 'react';

import { useContext } from "react";
import { ColorContext, UPDATE_COLOR } from "./color";

function Buttons() {
  const toOrange =() => {
    dispatch({
      type: UPDATE_COLOR,
      color: 'orange'
    })
  };
  const { dispatch } = useContext(ColorContext);
    return(
        <div>
          <button onClick={() => {dispatch({type: UPDATE_COLOR, color: 'pink'})}}>粉色</button>
          <button onClick={() => {dispatch({type: UPDATE_COLOR, color: 'green'})}}>绿色</button>
          <button onClick={toOrange}>橘色</button>
        </div>
    )
}

export default Buttons;