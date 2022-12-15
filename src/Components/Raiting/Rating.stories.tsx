import React, {useState} from 'react';
import {ComponentMeta} from '@storybook/react';
import {Rating} from "./Rating";
import {ChoiceNumber} from "../../App";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/Rating',
    component: Rating,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Rating>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const EmptyStars = () => <Rating onClickStar={0} setStarValue={x=>x}/>
export const Rating1 = () => <Rating onClickStar={1} setStarValue={x=>x}/>
export const Rating2 = () => <Rating onClickStar={2} setStarValue={x=>x}/>
export const Rating3 = () => <Rating onClickStar={3} setStarValue={x=>x}/>
export const Rating4 = () => <Rating onClickStar={4} setStarValue={x=>x}/>
export const Rating5 = () => <Rating onClickStar={5} setStarValue={x=>x}/>

//1) changeRating = () => - это компонента, в которую мы добавляем локальный state
export const RatingChanging = () => {
    const [starValue, setStarValue] = useState<ChoiceNumber>(4)
    return <Rating setStarValue={setStarValue} onClickStar={starValue}/>
}





