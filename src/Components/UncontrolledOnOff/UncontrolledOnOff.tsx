import React, {useState} from "react";
import st from './UncontrolledOnOff.module.css'

export type UncontrolledOnOffPropsType = {
    onChange?: (value: boolean) => void
    defaultMode?: boolean
}

export const UncontrolledOnOff = ({defaultMode, onChange}: UncontrolledOnOffPropsType) => {

    const [onOff, setOnOff] = useState<boolean>(defaultMode ? defaultMode : false)
    console.log(onOff, "UncontrolledOnOff")

    return (
       <X
           onChange={setOnOff}
           onOff={onOff}
       />
    );
}

export type XType = {
    onChange: (value: boolean) => void
    onOff: boolean
}

export const X = ({onChange, onOff}: XType) => {
    let colored1 = `${st.green}`
    let colored2 = `${st.pink}`
console.log(onOff, "X")
    return (
        <div className={st.blockSwitch}>
            <div onClick={() => { onChange(true); onChange && onChange(true) } } className={onOff ? colored1 : st.blockOn}>
                <span>ON</span>
            </div>
            <div onClick={() => { onChange(false); onChange && onChange(false) } } className={!onOff ? colored2 : st.blockOff}>
                <span>OFF</span>
            </div>
            <div className={onOff ? st.circleOn : st.circleOff}></div>
        </div>
    )
}