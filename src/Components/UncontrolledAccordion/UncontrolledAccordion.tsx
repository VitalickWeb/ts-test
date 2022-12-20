import React, {useReducer} from 'react';

import {UncontrolledAccordionTitle} from "./UncontrolledAccordionTitle";
import {UncontrolledAccordionBody} from "./UncontrolledAccordionBody";
import {accordionReducer, ActionsType} from "./Accordion-reducer";

export type AccordionPropsType = {
    title: string
}

export const UncontrolledAccordion = ({title}: AccordionPropsType) => {

    const [state, dispatchToAccordion] = useReducer(accordionReducer, {collapsed: false})

    return (
        <div>
            <UncontrolledAccordionTitle
                title={title}
                setCollapsed={(type: ActionsType) => dispatchToAccordion(type)}
            />

            <UncontrolledAccordionBody
                setCollapsed={state.collapsed}
            />

        </div>
    );
}

