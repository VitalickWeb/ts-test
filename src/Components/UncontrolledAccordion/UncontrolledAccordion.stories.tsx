import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {UncontrolledAccordion} from "./UncontrolledAccordion";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/UncontrolledAccordion',
    component: UncontrolledAccordion,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof UncontrolledAccordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
//1) changingStarRating = () => - это компонента, которая контролируется сама по себе, поэтому не добавляем локальный state
export const switchMode = () => {
    return <UncontrolledAccordion  title="menu" />
}