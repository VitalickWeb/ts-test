import React, {useEffect, useState} from 'react';
import {UncontrolledOnOff, X} from "./UncontrolledOnOff";
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/UncontrolledOnOff',
    component: [UncontrolledOnOff, X],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const on = "on"
const off = "off"

const callback1 = action(on)
const callback2 = action(off)
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const ModeOn = () => {
    const [onOff, setOnOff] = useState<boolean>(true)
    useEffect(() => {onOff ? callback1() : callback2()},[onOff])
   return <X onOff={onOff} onChange={(value) => {setOnOff(value) } }/>
}
export const ModeOff = () => {
    return <X onOff={false} onChange={(value) => { value ? callback1() : callback2() } }/>
}
// export const modeOff = () =>  <UncontrolledOnOff defaultMode={false} onChange={(callback2)} />
// export const defaultInputValue = () => <input defaultValue={"on"} />

//1) changingStarRating = () => - это компонента, которая контролируется сама по себе, поэтому не добавляем локальный state
// export const switchMode = () => {
//     return <UncontrolledOnOff />
// }


