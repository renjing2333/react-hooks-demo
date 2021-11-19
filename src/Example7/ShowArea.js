import { useContext } from "react";
import { ColorContext } from "./color";

function ShowArea() {
  const { color, name } = useContext(ColorContext);
  return(
      <div style={{color}}>
        这块颜色是{color},小猫咪是{name}
      </div>
  )
}

export default ShowArea;