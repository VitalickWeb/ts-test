import React from 'react';
import {ActionsType} from "./Accordion-reducer";

export type UncontrolledAccordionTitleType = {
    title: string
    setCollapsed: (type: ActionsType) => void
}

export const UncontrolledAccordionTitle = ({title, setCollapsed}: UncontrolledAccordionTitleType) => {

    return (
        <div>
            {/*при нажатии на кнопку Title мы диспатчим инструкцию куда то в react, dispatch это функция которая*/}
            {/*вызывается useReducer, с помощью которой react позволяет нам отправлять в него, команды actions,*/}
            {/*что бы можно было преобразовать state, стартовое значение которое передается вторым параметром хука*/}
            {/*useReducer, с помощью первого параметра reducer.*/}
            <h3 onClick={() => setCollapsed({type: "TOGGLE-COLLAPSED"})}>{title}</h3>
        </div>
    );
};
