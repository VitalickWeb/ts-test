import React from 'react';

export type UncontrolledAccordionTitleType = {
    title: string
    setCollapsed: () => void
}

export const UncontrolledAccordionTitle = ({title, setCollapsed}: UncontrolledAccordionTitleType) => {

    return (
        <div>
            <h3 onClick={() => setCollapsed()}>{title}</h3>
        </div>
    );
};
