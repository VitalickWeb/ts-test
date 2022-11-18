import React, {useState} from "react";
import {AccordionBody} from "./AccordionBody";
import {AccordionTitle} from "./AccordionTitle";

export type AccordionPropsType = {
    setAccordionCollapsed: () => void
    setCollapsed: boolean
    title: string
}

export function Accordion({title, setAccordionCollapsed, setCollapsed}: AccordionPropsType) {
    console.log()

    return (
        <div>
            <AccordionTitle
                title={title}
                setAccordionCollapsed={() => setAccordionCollapsed()}
            />

            <AccordionBody
                setCollapsed={setCollapsed}
            />

        </div>
    );
}


