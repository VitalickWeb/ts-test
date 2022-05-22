import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    console.log('App rendering');
    return (
        <div className="App">
            <Rating/>
            <Accordion/>
        </div>
    );
}

function Rating() {
    console.log('Raiting rendering');
    return (
        <div>
            <Stars/>
            <Stars/>
            <Stars/>
            <Stars/>
            <Stars/>
        </div>
    );
}

function Stars() {
    console.log('Stars rendering');
    return (
        <div>
            <div>star *</div>
        </div>
    );
}

function Accordion() {
    console.log('Accordion rendering');
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    );
}

function AccordionTitle() {
    console.log('AccordionTitle rendering');
    return (
        <div>
            <h3>Menu</h3>
        </div>
    );
}

function AccordionBody() {
    console.log('AccordionBody rendering');
    return (
        <div>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </div>
    );
}

export default App;
