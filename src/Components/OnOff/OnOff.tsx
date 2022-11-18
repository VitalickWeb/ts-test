import React from 'react';
import st from "../OnOff/OnOff.module.css";


export type OnOffPropsType = {
    setOnOff: (onOff: boolean) => void
    onClickOnOff: boolean
}

export const OnOff = ({setOnOff, onClickOnOff}: OnOffPropsType) => {

    const onClickOn = () => {
        setOnOff(true)
    }

    const onClickOff = () => {
        setOnOff(false)
    }

    let colored1 = `${st.green}`
    let colored2 = `${st.pink}`

    return (
        <div className={st.boxSwitch}>
            <div onClick={onClickOn} className={onClickOnOff ? colored1 : st.blockOn}>
                <span>ON</span>
            </div>
            <div onClick={onClickOff} className={!onClickOnOff ? colored2 : st.blockOff}>
                <span>OFF</span>
            </div>
            <div className={onClickOnOff ? st.circleOn : st.circleOff}></div>
        </div>
    );
};

