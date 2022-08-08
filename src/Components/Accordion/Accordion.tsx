import React from "react";


export type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    clickTitle: (title: boolean) => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                clickTitle={props.clickTitle}
            />
            {!props.collapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string;
    clickTitle: (title: boolean) => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {

    const onClickTitleHandler = (title: boolean) => {
        props.clickTitle(title)
    }

    return (
        <h3 onClick={() => onClickTitleHandler(false)}>{props.title}</h3>
    );
}

export function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
}
