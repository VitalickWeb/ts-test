import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Accordion} from './Accordion';


export default {
    title: 'Accordion',
    component: Accordion,
}

export const ClickByMenuMode = () => <Accordion titleValue={'Menu'} collapsed={true}/>
export const ClickByUsersMode = () => <Accordion titleValue={'Users'} collapsed={false}/>

export const ModeChanging = () => {
    const [collapsed2, setCollapsed2] = useState<boolean>(false);
    return <Accordion titleValue={'Users'} collapsed={!collapsed2}/>
}