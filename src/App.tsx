import React from 'react';
import './App.css';
import {Accordion} from "./Components/Accordion/Accordion";
import {PageTitle} from "./Components/PageTitle/PageTitle";
import {Rating} from "./Components/Rating/Rating";
import {OnOff} from "./Components/OnOff/OnOff";

function App() {
    let flag = true;
    return (
        <div className="App">
            <PageTitle title={'This is App component'}/>
            <PageTitle title={'My friends'}/>

            Article 1;
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed={true}/>
            Article 2;
            <Rating
                value={0}
            />

            <div>
                <OnOff switch={flag}/>
            </div>
        </div>
    );
}

export default App;
