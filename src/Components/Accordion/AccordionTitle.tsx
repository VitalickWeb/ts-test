import React from 'react';

export type AccordionTitleType = {
    title: string
    setAccordionCollapsed: () => void
    /**
     * color title optional
     */
    color?: string
}

export const AccordionTitleTest = ({title, setAccordionCollapsed, color}: AccordionTitleType) => {

    return (
        <>
            <h3 style={{color: color ? color : "black"}}
                onClick={setAccordionCollapsed}>{title}
            </h3>
        </>
    );
};

