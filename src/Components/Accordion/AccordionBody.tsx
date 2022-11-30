import React from 'react';
import {ArrElementsPropsType} from "./Accordion";

export type AccordionBodyPropsType = {
    setCollapsed: boolean
    arrElements: ArrElementsPropsType[]
    onClickElem: (value: any) => void
}

export const AccordionBody = ({setCollapsed, arrElements, onClickElem}: AccordionBodyPropsType) => {
    console.log()
    const renderArrElem = arrElements.map(el => {

        const clickElemHandler = () => {
            onClickElem(alert(`${el.name} have to learning react`))
        }

        return (
            <li key={el.id} onClick={clickElemHandler}>
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

