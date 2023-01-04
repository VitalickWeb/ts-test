import React, {ChangeEvent, useState} from 'react';

export type citiesType = {
    id: string,
    city: string,
    citizens: number
}

export type FilterByMType = {
    cities: Array<citiesType>
}

export const SelectFilterByLetter = ({cities}: FilterByMType) => {
    console.log('SelectFilterByLetterM')

    const [town, setCity] = useState<string>('')

    let showFilteredCities = cities.map(s => {

        return (
            <option key={s.id}>
                {s.city}
            </option>
        )
    })

    const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setCity(e.currentTarget.value)
    }

    return (
        <span>
            <select value={town} onChange={onChangeSelect}>
                {showFilteredCities}
            </select>
        </span>
    );
};

