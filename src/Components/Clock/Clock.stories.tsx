import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {Clock} from "./Clock";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/Clock',
    component: Clock,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Clock>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const ClockExample = () => <Clock />


