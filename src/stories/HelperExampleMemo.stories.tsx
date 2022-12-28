import React, {ChangeEvent, useState} from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'HelperExample.memo demo',
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {
            control: 'color'
        },
    },
};

export const HelperExampleMemo = () => {
    // const [country, setCountry] = useState<string>('')
    //
    // const [selects, setSelects] = useState([
    //         {id: 1,
    //             country: 'Belarus',
    //             cities: ['Minsk', "Brest", "Grodno"],
    //             citizen: 9000000,
    //         },
    //         {id: 2,
    //             country: 'Ukraine',
    //             cities: ['Kiev', "Mariupol", "Azov"],
    //             citizen: 40000000,
    //         },
    //         {id: 3,
    //             country: 'Germany',
    //             cities: ['Berlin', "Koln", "Munich"],
    //             citizen: 80000000,
    //         },
    //     ])
    // const [cities, setCities] = useState(selects)
    // console.log(cities)
    // let newArray = selects.map(s => {
    //     return (
    //         <option value={s.country} key={s.id}>{s.country}</option>
    //     )
    // })
    //
    //
    // return (
    //     <div>
    //         {/*<SelectGetCitiesByLetterM country={}/>*/}
    //         <>
    //         {country && <select value={country}>
    //             {selects.filter(s => s.cities.filter(el => el.toLowerCase().indexOf('m') > -1)).map((el) => <option value={el.cities} key={el.id}>{el.cities}</option>)}
    //         </select>}
    //         </>
    //     </div>
    // );
}
//
// const SelectGetCitiesByLetterM = (props: string) => {
//
//     const changeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
//         setCountry(e.currentTarget.value)
//     }
//
//     return (
//         <option value={props} onChange={changeSelect}>
//             {}
//         </option>
//         )
//
// }