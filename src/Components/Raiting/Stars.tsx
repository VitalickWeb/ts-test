import React from 'react';

export type StarsPropsType = {
    selectValue: boolean
    setStarValue: () => void

}

export const Stars = ({selectValue, setStarValue}: StarsPropsType) => {
    console.log()
    return (
        <span onClick={ () => {setStarValue()} }>
            {selectValue ? <b>star </b> : "star "}
        </span>
    );
};

