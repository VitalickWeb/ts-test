import React from 'react';
import {Stars} from "./Stars";
import {ChoiceNumber} from "../../App";

export type RatingPropsType = {
    setStarValue: (starValue: ChoiceNumber) => void
    onClickStar: ChoiceNumber
}

export const Rating = ({setStarValue, onClickStar}: RatingPropsType) => {
    console.log()

    return (
        <div>
            <Stars selectValue={onClickStar > 0} setStarValue={() => {setStarValue(1)}} />
            <Stars selectValue={onClickStar > 1} setStarValue={() => {setStarValue(2)}} />
            <Stars selectValue={onClickStar > 2} setStarValue={() => {setStarValue(3)}} />
            <Stars selectValue={onClickStar > 3} setStarValue={() => {setStarValue(4)}} />
            <Stars selectValue={onClickStar > 4} setStarValue={() => {setStarValue(5)}} />
        </div>
    );
};
