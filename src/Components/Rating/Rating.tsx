import React from "react";


export type RatingStarType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    starValue: RatingStarType
    starClick: (typeStar: RatingStarType) => void
}

export const Rating = (props: RatingPropsType) => {

    return (
        <div>
            <Stars
                selected={props.starValue > 0}
                onClickStar={props.starClick}
                stars={1}
            />
            <Stars selected={props.starValue > 1} onClickStar={props.starClick} stars={2}/>
            <Stars selected={props.starValue > 2} onClickStar={props.starClick} stars={3}/>
            <Stars selected={props.starValue > 3} onClickStar={props.starClick} stars={4}/>
            <Stars selected={props.starValue > 4} onClickStar={props.starClick} stars={5}/>
        </div>
    );
}

type SelectedPropsType = {
    selected: boolean
    stars: RatingStarType
    onClickStar: (value: RatingStarType) => void
}

export const Stars = (props: SelectedPropsType) => {
    return (
        <span onClick={() => {
            props.onClickStar (props.stars)
        }}>
            {props.selected ? <b>star </b> : ' star'}
        </span>
    );
}