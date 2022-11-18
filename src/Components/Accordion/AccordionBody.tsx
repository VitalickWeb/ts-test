import React from 'react';

export type AccordionBodyPropsType = {
    setCollapsed: boolean
}

export const AccordionBody = ({setCollapsed}: AccordionBodyPropsType) => {
    console.log()

    return (
        <div>
            {!setCollapsed &&
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>}

        </div>
    );
};

