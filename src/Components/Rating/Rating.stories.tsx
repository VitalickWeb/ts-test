import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Rating, RatingStarType} from './Rating';


export default {
    title: 'Rating stories',
    component: Rating,
}

export const EmptyStars = () => <Rating starValue={0} starClick={x=>x}/>;
export const Rating1 = () => <Rating starValue={1} starClick={x=>x}/>;
export const Rating2 = () => <Rating starValue={2} starClick={x=>x}/>;
export const Rating3 = () => <Rating starValue={3} starClick={x=>x}/>;
export const Rating4 = () => <Rating starValue={4} starClick={x=>x}/>;
export const Rating5 = () => <Rating starValue={5} starClick={x=>x}/>;
export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingStarType>(0);
    return <Rating starValue={rating} starClick={setRating}/>
}