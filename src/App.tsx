import React, {useState} from 'react';
import {Accordion, ArrElementsPropsType} from "./Components/Accordion/Accordion";
import {PageTitle} from "./Components/PageTitle/PageTitle";
import {Rating} from "./Components/Raiting/Rating";
import {OnOff} from "./Components/OnOff/OnOff";
import {v1} from "uuid";
import {Select} from "./Components/select/Select";

export type ChoiceNumber = 0 | 1 | 2 | 3 | 4 | 5

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

    return (
        <div>
            <PageTitle />

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
            <Rating
                setStarValue={(starValue: ChoiceNumber) => setStarValue(starValue)}
                onClickStar={starValue}
            />

            <OnOff
                setOnOff={ (onOff: boolean) => setOnOff(onOff)}
                onClickOnOff={onOff}
            />

            <Select

            />

            {/*<UncontrolledOnOff*/}

            {/*/>*/}
            {/*<UncontrolledAccordion*/}
            {/*    title="click-1"*/}
            {/*/>*/}
            {/*<UncontrolledRating*/}

            {/*/>*/}
            {/*<UncontrolledAccordion*/}
            {/*    title="click-2"*/}
            {/*/>*/}
            {/*<UncontrolledRating*/}

            {/*/>*/}
        </div>
    );
}

export default App;
