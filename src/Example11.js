import React, { useRef } from 'react';

function Example11() {
    const inputEl = useRef(null)
    const onButtonClick=()=> {
      inputEl.current.value = 'hello word';
      console.log(inputEl); //输出获取到的DOM节点
    }
    return (
      <div>
        <input ref={inputEl} type="text"></input>
        <button onClick = {onButtonClick}>在input上展示文字</button>
      </div>
    )
}

export default Example11;