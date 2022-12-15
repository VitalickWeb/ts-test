import React, {useState} from 'react';
import {ComponentMeta} from '@storybook/react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/OnOff',
    component: OnOff,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof OnOff>;

const callback = action("clicked on or off")
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const SwitchOn = () => <OnOff onClickOnOff={true} setOnOff={callback}/>
export const SwitchOff = () => <OnOff onClickOnOff={false} setOnOff={callback}/>

//1) switchOnOff = () => - это компонента, в которую мы добавляем локальный state
export const SwitchOnOff = () => {
    const [on, setOn] = useState<boolean>(false)
    return <OnOff setOnOff={setOn} onClickOnOff={on} />
}

//если нам нужно по нажатию на пример на какую то кнопку узнать какое событие произошло
//то в сторибук для этого есть событие которое называется action
//например в качестве setOnOff вызываем action("string") передаем туда строку
