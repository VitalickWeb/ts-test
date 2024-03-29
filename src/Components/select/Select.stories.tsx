import React, {useState} from 'react';
import {ComponentMeta} from '@storybook/react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";
import {v1} from "uuid";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/Select',
    component: Select,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {
            control: 'color'
        },
        control: 'color'
    },
} as ComponentMeta<typeof Select>;

const callback = action("select should be collapsed")


// const Template: Story<AccordionPropsType> = (args) => <Select {...args} />;
// const callbacksProps = {
//     setAccordionCollapsed: callback
// }

//Альтернативный синтаксис для компонент
// export const collapsedMode = Template.bind({})
// collapsedMode.args = {
//     ...callbacksProps,//добавляем деструктуризацию всегда с верху
//     title: "click-1",
//     setCollapsed: true,
//     color: "color",
//     arrElements: [],
//     onClickElem: onClickCallback
// }
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const SelectClosed = () => <Select
    value={"Lithuania"}
    onChangeValue={callback}
    elements={[]}
    collapsed={() => {}}
    setCollapsed={false}
/>

export const SelectOpen = () => <Select
    value={"Lithuania"}
    onChangeValue={callback}
    elements={[
    {id: v1(), title: "Lithuania"},
    {id: v1(), title: "Ukraine"},
    {id: v1(), title: "Canada"},
    {id: v1(), title: "England"},
    {id: v1(), title: "Germany"},
]} setCollapsed={true}
    collapsed={() => {}}
/>

export const SelectControlled = () => {
    const [collapsed, setCollapsed] = useState(false)

    const [controlledSelect, setControlledSelect] = useState({data: [
            {id: v1(), title: "Lithuania"},
            {id: v1(), title: "Ukraine"},
            {id: v1(), title: "Canada"},
            {id: v1(), title: "England"},
            {id: v1(), title: "Germany"},
        ],
        value: "Lithuania",
    })

    return <Select
        value={controlledSelect.value}
        onChangeValue={(valueId: string, title: string) => setControlledSelect({...controlledSelect, value: title})}
        elements={controlledSelect.data}
        collapsed={() => setCollapsed(!collapsed)}
        setCollapsed={collapsed}
    />
}



