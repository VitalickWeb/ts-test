import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";


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

const callback = action("")


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
// export const collapseOpen = () => <Accordion title={"click-2"} setCollapsed={false} setAccordionCollapsed={callback} arrElements={[
//     {id: v1(), name: "Vit"},
//     {id: v1(), name: "react"},
//     {id: v1(), name: "JS"},
//     {id: v1(), name: "CSS"}
// ]} onClickElem={onClickCallback}/>

//1) collapseOpenClose = () => - это компонента, в которую мы добавляем локальный state
// export const collapseOpenClose = () => {
//     const [collapsedOnOff, setCollapsedOnOff] = useState<boolean>(false)
//
//     const [arrElements, setArrElements] = useState<ArrElementsPropsType[]>([
//         {id: v1(), name: "Vit"},
//         {id: v1(), name: "react"},
//         {id: v1(), name: "JS"},
//         {id: v1(), name: "CSS"},
//     ])
//     return <Accordion
//         title={"Menu"}
//         setAccordionCollapsed={() => setCollapsedOnOff(!collapsedOnOff)}
//         setCollapsed={collapsedOnOff} arrElements={arrElements}
//         onClickElem={onClickCallback}
//     />
// }

