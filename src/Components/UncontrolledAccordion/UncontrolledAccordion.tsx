import React, {useState} from 'react';

import {UncontrolledAccordionTitle} from "./UncontrolledAccordionTitle";
import {UncontrolledAccordionBody} from "./UncontrolledAccordionBody";

export type AccordionPropsType = {
    title: string
}

export const UncontrolledAccordion = ({title}: AccordionPropsType) => {
    console.log()
    const [collapsed, setCollapsed] = useState<boolean>(false)

    return (
        <div>
            <UncontrolledAccordionTitle
                title={title}
                setCollapsed={() => setCollapsed(!collapsed)}
            />

            <UncontrolledAccordionBody
                setCollapsed={collapsed}
            />

        </div>
    );
}

