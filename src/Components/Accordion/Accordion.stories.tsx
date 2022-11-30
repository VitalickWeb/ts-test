import React, {useState} from 'react';
import {ComponentMeta, Story} from '@storybook/react';
import {Accordion, AccordionPropsType, ArrElementsPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {v1} from "uuid";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/Accordion',
    component: Accordion,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {
            control: 'color'
        },
        control: 'color'
    },
} as ComponentMeta<typeof Accordion>;

const callback = action("event closed or opened")
const onClickCallback = action("what happening")

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;
const callbacksProps = {
    setAccordionCollapsed: callback
}

//Альтернативный синтаксис для компонент
export const collapsedMode = Template.bind({})
collapsedMode.args = {
    ...callbacksProps,//добавляем деструктуризацию всегда с верху
    title: "click-1",
    setCollapsed: true,
    color: "color",
    arrElements: [],
    onClickElem: onClickCallback
}
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const collapseOpen = () => <Accordion title={"click-2"} setCollapsed={false} setAccordionCollapsed={callback} arrElements={[
    {id: v1(), name: "Vit"},
    {id: v1(), name: "react"},
    {id: v1(), name: "JS"},
    {id: v1(), name: "CSS"}
]} onClickElem={onClickCallback}/>

//1) collapseOpenClose = () => - это компонента, в которую мы добавляем локальный state
export const collapseOpenClose = () => {
    const [collapsedOnOff, setCollapsedOnOff] = useState<boolean>(false)

    const [arrElements, setArrElements] = useState<ArrElementsPropsType[]>([
        {id: v1(), name: "Vit"},
        {id: v1(), name: "react"},
        {id: v1(), name: "JS"},
        {id: v1(), name: "CSS"},
    ])
    return <Accordion
        title={"Menu"}
        setAccordionCollapsed={() => setCollapsedOnOff(!collapsedOnOff)}
        setCollapsed={collapsedOnOff} arrElements={arrElements}
        onClickElem={onClickCallback}
    />
}
