import React, {useState} from "react";
// import {Stars} from "./Stars/Stars";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5;
}

export const Rating = (props: RatingPropsType) => {
    const [star, setStar] = useState(props.value)

    return (
        <div>
            <Stars selected={star > 0} setStar={setStar} stars={1}/>
            <Stars selected={star > 1} setStar={setStar} stars={2}/>
            <Stars selected={star > 2} setStar={setStar} stars={3}/>
            <Stars selected={star > 3} setStar={setStar} stars={4}/>
            <Stars selected={star > 4} setStar={setStar} stars={5}/>
        </div>
    );
}

type SelectedPropsType = {
    selected: boolean
    stars: 1 | 2 | 3 | 4 | 5
    setStar: (value: 1 | 2 | 3 | 4 | 5) => void

}

export const Stars = (props: SelectedPropsType) => {
    return (
        <span onClick={() => {
            props.setStar(props.stars)
        }}>
            {props.selected ? <b>star </b> : ' star'}
        </span>
    );
}