import React from "react";
import {ChoiceNumberRating} from "./UncontrolledRating";


export type StarPropsType = {
    selectValue: boolean
    setValue: (value: ChoiceNumberRating) => void
    value: ChoiceNumberRating
}

export const UncontrolledStars = ({ selectValue, setValue, value }: StarPropsType) => {
    console.log()

    return (
        <span onClick={() => setValue(value)}>
            {selectValue ? <b>star </b> : "star "}
        </span>
    );
}