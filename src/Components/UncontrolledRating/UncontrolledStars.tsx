import React from "react";


export type StarPropsType = {
    selectValue: boolean
    setValue: (value: 0 | 1 | 2 | 3 | 4 | 5) => void
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export const UncontrolledStars = ({ selectValue, setValue, value }: StarPropsType) => {
    console.log()

    return (
        <span onClick={() => setValue(value)}>
            {selectValue ? <b>star </b> : "star "}
        </span>
    );
}