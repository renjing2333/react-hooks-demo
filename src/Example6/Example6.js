import React,  {useReducer} from 'react';
// import React from 'react';
import Buttons from './Buttons';
import ShowArea from './ShowArea';
import { Color } from './color'

function Example6() {
    return (
        <div>
          <Color>
            <Buttons></Buttons>
            <ShowArea></ShowArea>
          </Color>
        </div>
    )
}

export default Example6;