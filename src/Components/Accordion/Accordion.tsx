import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
}

export function Accordion(props: AccordionPropsType) {

    const [collapsed2, setCollapsed2] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={()=> setCollapsed2(!collapsed2)}>toggle</button>
            {!collapsed2 && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3>{props.title}</h3>
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
