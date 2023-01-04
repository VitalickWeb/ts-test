import React, {ChangeEvent, useState} from 'react';


export type SelectsFilterType = {
    id: string,
    city: string,
    citizens: number
}

export type FilterByCitizensType = {
    cities: Array<SelectsFilterType>
}

export const SelectFilterByCitizen = ({cities}: FilterByCitizensType) => {
    console.log('SelectFilterByCitizen')

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

