import React, {useState} from "react";


export type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
}

export function Accordion(props: AccordionPropsType) {

    const [collapsed2, setCollapsed2] = useState(true)

    const clickTitle = (title: boolean) => {
        setCollapsed2(title)
    }

    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                clickTitle={clickTitle}
            />
            {!collapsed2 && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string;
    clickTitle: (title: boolean) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const onClickTitleHandler = (title: boolean) => {
        props.clickTitle(title)
    }

    return (
        <h3 onClick={() => onClickTitleHandler( false)}>{props.title}</h3>
    );
}

function AccordionBody() {
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
