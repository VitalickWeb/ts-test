import React from 'react';

export type AccordionTitleType = {
    title: string
    setAccordionCollapsed: () => void

}

export const AccordionTitle = ({title, setAccordionCollapsed}: AccordionTitleType) => {

    return (
        <>
            <h3 onClick={setAccordionCollapsed}>{title}</h3>
        </>
    );
};

