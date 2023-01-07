import React, {useEffect, useState} from 'react';

const addZero = (num: number) => num < 10 ? '0' + num : num

export const Clock = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, [])

    return (
        <div>
            <span>{addZero(date.getHours())}</span>
            :
            <span>{addZero(date.getMinutes())}</span>
            :
            <span>{addZero(date.getSeconds())}</span>
        </div>
    );
};

