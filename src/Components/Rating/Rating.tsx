import React from "react";
import {Stars} from "./Stars/Stars";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5;
}

export const Rating = (props: RatingPropsType) => {
    return (
        <div>
            <Stars selected={props.value > 0}/>
            <Stars selected={props.value > 1}/>
            <Stars selected={props.value > 2}/>
            <Stars selected={props.value > 3}/>
            <Stars selected={props.value > 4}/>
        </div>
    );
}
