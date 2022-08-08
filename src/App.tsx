import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./Components/Accordion/Accordion";
import {PageTitle} from "./Components/PageTitle/PageTitle";
import {Rating, RatingStarType} from "./Components/Rating/Rating";
import {OnOff} from "./Components/OnOff/OnOff";

function App() {
    const [collapsed2, setCollapsed2] = useState<boolean>(false)
    const clickTitle = (title: boolean) => {
        setCollapsed2(collapsed2 ? title : !title)
        console.log(collapsed2)
    }

    const [starValue, setStarValue] = useState<RatingStarType>(0)
    const starValueHandler = (typeStar: RatingStarType) => {
        setStarValue(typeStar)
    }

    const [switchValue, setSwitchValue] = useState<boolean>(false)
    const switchOnClickHandler = (typeSwitch: boolean) => {
        setSwitchValue(typeSwitch)
    }

    return (
        <div className="App">
            <PageTitle title={'This is App component'}/>
            <PageTitle title={'My friends'}/>

            <Accordion
                titleValue={'Menu'}
                collapsed={collapsed2}
                clickTitle={clickTitle}
            />
            <Accordion
                titleValue={'Users'}
                collapsed={collapsed2}
                clickTitle={clickTitle}
            />

            <Rating
                starValue={starValue}
                starClick={starValueHandler}
            />

            <div>
                <OnOff
                    switch={switchValue}
                    switchValue={switchOnClickHandler}
                />
            </div>
        </div>
    );
}

export default App;
