import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Accordion} from './Accordion';
import {action} from "@storybook/addon-actions";


export default {
    title: 'Accordion',
    component: Accordion,
}
const callback = action("accordion mode change event fired")
const onClickCallback = action("some item was clicked")

export const ClickByMenuMode = () => <Accordion titleValue={'Menu'} collapsed={true} clickTitle={x=>x} items={[]} onClick={callback}/>
export const ClickByUsersMode = () => <Accordion titleValue={'Users'} collapsed={false} clickTitle={x=>x} items={[
    {title: 'Vit', value: 1},
    {title: 'Yr', value: 2},
    {title: 'Liz', value: 3},
]} onClick={onClickCallback}/>

export const ModeChanging = () => {
    const [collapsed2, setCollapsed2] = useState<boolean>(true);
    const clickTitle = () => { setCollapsed2(!collapsed2) }

    return <Accordion titleValue={'Users'} collapsed={collapsed2} clickTitle={clickTitle} items={[
        {title: 'Vit', value: 1},
        {title: 'Yr', value: 2},
        {title: 'Liz', value: 3},
    ]} onClick={onClickCallback}/>
}