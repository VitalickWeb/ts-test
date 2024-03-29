import React from "react";
import {AccordionBodyTest} from "./AccordionBody";
import {AccordionTitleTest} from "./AccordionTitle";

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

const AccordionTitle = React.memo(AccordionTitleTest)
const AccordionBody = React.memo(AccordionBodyTest)

export function Accordion({title, setAccordionCollapsed, setCollapsed, color, arrElements, onClickElem}: AccordionPropsType) {

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


