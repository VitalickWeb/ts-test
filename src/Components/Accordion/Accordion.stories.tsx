import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Accordion} from './Accordion';


export default {
    title: 'Accordion',
    component: Accordion,
}

export const ClickByMenuMode = () => <Accordion titleValue={'Menu'} collapsed={true} clickTitle={x=>x}/>
export const ClickByUsersMode = () => <Accordion titleValue={'Users'} collapsed={false} clickTitle={x=>x}/>

export const ModeChanging = () => {
    const [collapsed2, setCollapsed2] = useState<boolean>(true);
    const clickTitle = () => {
        setCollapsed2(!collapsed2)
    }
    return <Accordion titleValue={'Users'} collapsed={collapsed2} clickTitle={clickTitle} />
}