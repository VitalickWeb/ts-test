import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {OnOff} from './OnOff';


export default {
    title: 'OnOff',
    component: OnOff,
}

export const onMode = () => <OnOff switch={true} switchValue={x=>x}/>
export const offMode = () => <OnOff switch={false} switchValue={x=>x}/>

export const ModeChanging = () => {
    const [switcher, setSwitcher] = useState<boolean>(false);
    return <OnOff switch={switcher} switchValue={setSwitcher}/>
}