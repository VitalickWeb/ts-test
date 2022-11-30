import React, {useEffect, useState} from "react";
import {UncontrolledStars} from "./UncontrolledStars";

export type ChoiceNumberRating = 0 | 1 | 2 | 3 | 4 | 5

export type RatingPropsType = {
    defaultRating?: ChoiceNumberRating
    onChange?: (value: ChoiceNumberRating) => void
}

export const UncontrolledRating = ({defaultRating, onChange}: RatingPropsType) => {

    const [value, setValue] = useState<ChoiceNumberRating>(defaultRating ? defaultRating : 0)
    //так как useState работает асинхронно, при нажатии на кнопку срабатывает колбэк, в колбэке лежал раньше setValue
    //и onChange соответственно сетаем новое значение в useState, значение в юстейте срабатывает только
    // тогда когда отработает весь код.

    //useEffect(() => {onChange && onChange(value)}, [value])
    //useEffect вызывает колбэк когда value массив зависимости изменится
    console.log(defaultRating)
    return (
        <>
            <UncontrolledStars selectValue={value > 0} value={1} setValue={(value) => { setValue(value); onChange && onChange(value)} } />
            <UncontrolledStars selectValue={value > 1} value={2} setValue={(value) => { setValue(value); onChange && onChange(value)} } />
            <UncontrolledStars selectValue={value > 2} value={3} setValue={(value) => { setValue(value); onChange && onChange(value)} } />
            <UncontrolledStars selectValue={value > 3} value={4} setValue={(value) => { setValue(value); onChange && onChange(value)} } />
            <UncontrolledStars selectValue={value > 4} value={5} setValue={(value) => { setValue(value); onChange && onChange(value)} } />
        </>
    );
}


