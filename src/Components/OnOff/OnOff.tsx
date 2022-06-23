import React from "react";
import st from "./OnOff.module.css"

type SwitcherPropsType = {
    switch: boolean
    switchValue: (typeSwitch1: boolean) => void
}

export const OnOff = (props: SwitcherPropsType) => {

    const onClickHandler = (typeSwitch1: boolean) => {
        props.switchValue(typeSwitch1)
    }

    return (
      <div className={st.blockSwitch}>
          <div className={props.switch ? st.green : st.white} onClick={ () => onClickHandler( true)}>On</div>
          <div className={!props.switch ? st.red : st.white} onClick={ ()=> onClickHandler(false)}>Off</div>
          <div className={props.switch ? st.circleGreen : st.circleRed}></div>
      </div>
    );
}