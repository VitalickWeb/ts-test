import React, {useState} from "react";
import st from './UncontrolledOnOff.module.css'

export const UncontrolledOnOff = () => {

    const [onOff, setOnOff] = useState(false)

    let colored1 = `${st.green}`
    let colored2 = `${st.pink}`

    return (
        <div className={st.blockSwitch}>
            <div onClick={() => setOnOff(true)} className={onOff ? colored1 : st.blockOn}>
                <span>ON</span>
            </div>
            <div onClick={() => setOnOff(false)} className={!onOff ? colored2 : st.blockOff}>
                <span>OFF</span>
            </div>
            <div className={onOff ? st.circleOn : st.circleOff}></div>
        </div>
    );
}