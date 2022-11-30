import React from 'react';
import {ArrElementsPropsType} from "./Accordion";

export type AccordionBodyPropsType = {
    setCollapsed: boolean
    arrElements: ArrElementsPropsType[]
}

export const AccordionBody = ({setCollapsed, arrElements}: AccordionBodyPropsType) => {
    console.log()
    const renderArrElem = arrElements.map(el => {

        return (
            <li key={el.id}>
                {el.name}
            </li>
        )
    })

    return (
        <div>
            {!setCollapsed &&
            <ul>
                {renderArrElem}
            </ul>}
        </div>
    );
};

