import React from "react";

type itemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    clickTitle: (title: boolean) => void
    items: itemType[]
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {


    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                clickTitle={props.clickTitle}
            />
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
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

type AccordionBodyPropsType = {
    items: itemType[]
    onClick: (value: any) => void
}

export function AccordionBody(props: AccordionBodyPropsType) {
    const renderItems = props.items.map((it, i) => {
        return (
            <li onClick={ () => {props.onClick(it.value)} } key={i}>
                {it.title}
            </li>
        )
    })

    return (
        <div>
            <ul>
                {renderItems}
            </ul>
        </div>
    );
}
