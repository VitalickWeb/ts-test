import React, {useState} from 'react';
import {Accordion, ArrElementsPropsType} from "./Components/Accordion/Accordion";
import {PageTitle} from "./Components/PageTitle/PageTitle";
import {Rating} from "./Components/Raiting/Rating";
import {OnOff} from "./Components/OnOff/OnOff";
import {v1} from "uuid";
import {ArrElemType, Select} from "./Components/select/Select";
import st from './App.module.css'
import {UncontrolledAccordion} from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import {SelectUseMemo} from "./Components/ExampleUseMemo/SelectUseMemo";

export type ChoiceNumber = 0 | 1 | 2 | 3 | 4 | 5

export type stateType = {
    data: Array<ArrElemType>,
    value: string
}

function App() {

    const [arrElements, setArrElements] = useState<Array<ArrElementsPropsType>>([
        {id: v1(), name: "Vit"},
        {id: v1(), name: "Vera"},
        {id: v1(), name: "Dima"},
        {id: v1(), name: "Many People"},
    ])

    console.log()
    //контролируемый аккордеон
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    //контролируемый rating
    const [starValue, setStarValue] = useState<ChoiceNumber>(0)
    //контролируемый OnOff
    const [onOff, setOnOff] = useState(false)



    //controlled select
    const [select, setSelect] = useState<stateType>({data: [
        {id: v1(), title: "Lithuania"},
        {id: v1(), title: "Ukraine"},
        {id: v1(), title: "Canada"},
        {id: v1(), title: "England"},
        {id: v1(), title: "Germany"},
    ],
        value: "Ukraine",
    })

    const [onOffSelect, setOnOffSelect] = useState<boolean>(false)

    const onChangeValue = (valueId: string, title: string) => {
        setSelect({...select, value: title})
    }

    //##########################################################################################

    const [country, setCountry] = useState<string>('')
    const [selects, setSelects] = useState([
        {id: 1,
            country: 'Belarus',
            cities: ['Minsk', "Brest", "Grodno"],
            citizen: 9000000,
        },
        {id: 2,
            country: 'Ukraine',
            cities: ['Kiev', "Mariupol", "Azov"],
            citizen: 40000000,
        },
        {id: 3,
            country: 'Germany',
            cities: ['Berlin', "Koln", "Munich"],
            citizen: 80000000,
        },
    ])

    return (
        <div className={st.container}>
            <PageTitle />

            <Select
                value={select.value}
                onChangeValue={onChangeValue}
                elements={select.data}
                collapsed={(blur) => setOnOffSelect(blur)}
                setCollapsed={onOffSelect}
            />

            <Accordion
                title="Menu"
                setAccordionCollapsed={() => setAccordionCollapsed(!accordionCollapsed)}
                setCollapsed={accordionCollapsed}
                arrElements={arrElements}
                onClickElem={() => setArrElements(arrElements)}
            />
            <Rating
                setStarValue={(starValue: ChoiceNumber) => setStarValue(starValue)}
                onClickStar={starValue}
            />
            {/*<Accordion*/}
            {/*    title="switch-2"*/}
            {/*    setAccordionCollapsed={() => setAccordionCollapsed(!accordionCollapsed)}*/}
            {/*    setCollapsed={accordionCollapsed}*/}
            {/*/>*/}
            {/*<Rating*/}
            {/*    setStarValue={(starValue: ChoiceNumber) => setStarValue(starValue)}*/}
            {/*    onClickStar={starValue}*/}
            {/*/>*/}

            <OnOff
                setOnOff={ (onOff: boolean) => setOnOff(onOff)}
                onClickOnOff={onOff}
            />

            {/*<UncontrolledOnOff*/}

            {/*/>*/}
            <UncontrolledAccordion
                title="click-1"
            />
            {/*<UncontrolledRating*/}

            {/*/>*/}
            {/*<UncontrolledAccordion*/}
            {/*    title="click-2"*/}
            {/*/>*/}
            {/*<UncontrolledRating*/}

            {/*/>*/}
            <hr/>
            <SelectUseMemo />
        </div>
    );
}

export default App;
