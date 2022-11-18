import React, {useState} from 'react';
import {Accordion} from "./Components/Accordion/Accordion";
import {PageTitle} from "./Components/PageTitle/PageTitle";
import {Rating} from "./Components/Raiting/Rating";
import {OnOff} from "./Components/OnOff/OnOff";

export type ChoiceNumber = 0 | 1 | 2 | 3 | 4 | 5

function App() {

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
                title="switch-1"
                setAccordionCollapsed={() => setAccordionCollapsed(!accordionCollapsed)}
                setCollapsed={accordionCollapsed}
            />
            <Rating
                setStarValue={(starValue: ChoiceNumber) => setStarValue(starValue)}
                onClickStar={starValue}
            />
            <Accordion
                title="switch-2"
                setAccordionCollapsed={() => setAccordionCollapsed(!accordionCollapsed)}
                setCollapsed={accordionCollapsed}
            />
            <Rating
                setStarValue={(starValue: ChoiceNumber) => setStarValue(starValue)}
                onClickStar={starValue}
            />

            <OnOff
                setOnOff={ (onOff: boolean) => setOnOff(onOff)}
                onClickOnOff={onOff}
            />

            {/*<UncontrolledOnOff */}

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
