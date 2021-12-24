import React, { useMemo, useState } from "react";

function Example10() {
    const [red, setRed] = useState('粉红');
    const [green, setGreen] = useState('绿色');
    return(
        <>
          <button onClick={()=>{setRed(new Date().getTime())}}>红</button>
          <button onClick={()=>{setGreen(new Date().getTime())}}>绿</button>
          <ChildComponent name={red}>{green}</ChildComponent>
        </>
    )
}

function ChildComponent({name, children}) {
  function changeRed(name) {
    console.log('changeRed方法红红红红色');
    return name + ',这是红色'
  }

  // const actionRed = changeRed(name)
  const actionRed = useMemo(()=> changeRed(name),[name])
  return (
    <>
      <div>{actionRed}</div>
      <div>{children}</div>
    </>
  )
}

export default Example10;