import React, {useState} from "react";
import {AccordionBody} from "./AccordionBody";
import {AccordionTitle} from "./AccordionTitle";

export type ArrElementsPropsType = {
    id: string
    name: string
}

export type AccordionPropsType = {
    setAccordionCollapsed: () => void
    /**
     * demonstration of a collapsed block on click on a title click in the true position
     */
    setCollapsed: boolean
    title: string
    color?: string
    arrElements: ArrElementsPropsType[]
    onClickElem: (value: any) => void
}

export function Accordion({title, setAccordionCollapsed, setCollapsed, color, arrElements, onClickElem}: AccordionPropsType) {
    console.log()

    return (
        <div>
            <AccordionTitle
                title={title}
                setAccordionCollapsed={() => setAccordionCollapsed()}
                color={color}
            />

            <AccordionBody
                setCollapsed={setCollapsed}
                arrElements={arrElements}
                onClickElem={onClickElem}
            />

        </div>
    );
}


