import { useContext } from "react";
import { ColorContext } from "./color";

function ShowArea() {
  const {color} = useContext(ColorContext)
    return(
      <div style={{color}}>
        <h1>这块区域是{color}</h1>
      </div>
    )
}

export default ShowArea;