import React, {useState} from "react";
import {UncontrolledStars} from "./UncontrolledStars";

export type RatingPropsType = {}

export const UncontrolledRating = ({}: RatingPropsType) => {
    const [value, setValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)

    return (
        <>
            <UncontrolledStars selectValue={value > 0} setValue={setValue} value={1}/>
            <UncontrolledStars selectValue={value > 1} setValue={setValue} value={2}/>
            <UncontrolledStars selectValue={value > 2} setValue={setValue} value={3}/>
            <UncontrolledStars selectValue={value > 3} setValue={setValue} value={4}/>
            <UncontrolledStars selectValue={value > 4} setValue={setValue} value={5}/>
        </>
    );
}


