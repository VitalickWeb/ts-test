import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {UncontrolledRating} from "./UncontrolledRating";
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/UncontrolledRating',
    component: UncontrolledRating,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof UncontrolledRating>;

const callback = action("on click by star must be have changed inside component")
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const DefaultRating0 = () => <UncontrolledRating defaultRating={0} onChange={callback} />
export const DefaultRating1 = () => <UncontrolledRating defaultRating={1} onChange={callback}/>
export const DefaultRating2 = () => <UncontrolledRating defaultRating={2} onChange={callback}/>
export const DefaultRating3 = () => <UncontrolledRating defaultRating={3} onChange={callback}/>
export const DefaultRating4 = () => <UncontrolledRating defaultRating={4} onChange={callback}/>
export const DefaultRating5 = () => <UncontrolledRating defaultRating={5} onChange={callback}/>

//1) changingStarRating = () => - это компонента, которая контролируется сама по себе, поэтому не добавляем локальный state

