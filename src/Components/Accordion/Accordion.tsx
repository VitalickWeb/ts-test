import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
}

export function Accordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={()=> setCollapsed(collapsed ? false : true)}>toggle</button>
            {!collapsed && <AccordionBody/>}
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
