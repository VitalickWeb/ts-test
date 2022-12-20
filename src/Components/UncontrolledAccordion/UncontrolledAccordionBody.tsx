import React from 'react';

export type UncontrolledAccordionBodyPropsType = {
    setCollapsed: boolean
}

export const UncontrolledAccordionBody = ({setCollapsed}: UncontrolledAccordionBodyPropsType) => {

    return (
        <>
            {!setCollapsed &&
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            }
        </>
    );
};

