import React, {useState} from "react";
import st from "./OnOff.module.css"

type SwitcherPropsType = {
    switch: boolean
}

export const OnOff = (props: SwitcherPropsType) => {
    const [def, setDef] = useState(props.switch)

    const onHandler = (value: boolean) => {
        setDef(value)
    }

    return (
      <div className={st.blockSwitch}>
          <button className={def ? st.green : st.white} onClick={()=>onHandler(true)}>On</button>
          <button className={!def ? st.red : st.white} onClick={()=>onHandler(false)}>Off</button>
          <div className={def ? st.circleGreen : st.circleRed}></div>
      </div>
    );
}