import React from 'react';
import {citiesType, SelectFilterByLetter} from "./SelectFilterByLetterM";
import {SelectFilterByCities} from "./SelectFilterByCities";
import {SelectFilterByCitizen} from "./SelectFilterByCitizen";
import {CitiesStateType, CountriesType} from "../../App";


export type SelectFilterPropsType = {
    countries: Array<CountriesType>
    cities: CitiesStateType
}

export const SelectUseMemo = React.memo(({cities, countries}: SelectFilterPropsType) => {
    console.log('SelectUseMemo')

    let filteredByLetter: Array<citiesType> = []

    for (let key in cities) {
        let filteredCities = cities[key].filter(c => {return c.city.toLowerCase().indexOf('m') > -1})
        filteredByLetter = filteredByLetter.concat(filteredCities)
    }

    let filteredCities = cities[countries.filter(c => {
            return c.country === 'Germany';
        })[0].id]

    let filteredCitizens: Array<citiesType> = []

    for (let key in cities) {
        let newFilteredCitizens = cities[key].filter(c => {
            return c.citizens > 2000000;
        })
        filteredCitizens = [...filteredCitizens, ...newFilteredCitizens]
    }


    return (
        <span >
            <SelectFilterByLetter
                cities={filteredByLetter}
            />
            <SelectFilterByCities
                cities={filteredCities}
            />
            <SelectFilterByCitizen
                cities={filteredCitizens}
            />
        </span>
    );
});

