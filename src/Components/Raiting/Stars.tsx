import React from 'react';

export type Stars = {
    selectValue: boolean
    setStarValue: () => void

}

export const Stars = ({selectValue, setStarValue}: Stars) => {
    console.log()
    return (
        <span onClick={ () => {setStarValue()} }>
            {selectValue ? <b>star </b> : "star "}
        </span>
    );
};

