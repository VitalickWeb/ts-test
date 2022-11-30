import React, {ChangeEvent, useRef, useState} from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/input',
    component: <input/>,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {
            control: 'color'
        },
    },
};

export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")

    const changeInputElem = (e: ChangeEvent<HTMLInputElement>) => {
        let actualValue = e.currentTarget.value
        setValue(actualValue)
    }

    return <>
        <input onChange={changeInputElem}/> - {value}
    </>
}

//Hook useRef
export const GetValueOfUncontrolledInput = () => {
    const [getValue, setGetValue] = useState<string>("")

    const inputRef = useRef<HTMLInputElement>(null)//создаем ссылку которую связываем с элементом

    const save = () => {
        let el = inputRef.current as HTMLInputElement//в коде обращаемся к ссылке и ее значению current
        //и в этом current будет сидеть то на что ссылается этот ref
        //таким образом в любом месте мы можем достучатся до input и взять из него value
        setGetValue(el.value)
    }

    return <>
        {/*ссылку useRef которую связываем с элементом*/}
        <input ref={inputRef}/>
        <button onClick={ save }>save</button> - actual value: {getValue}
    </>
}

export const ControlledInput = () => {
    const [inputValue, setInputValue] = useState<string>("")

    const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    return (
        <>
            <input type="text" value={inputValue} onChange={ changeInputValue }/> {inputValue}
        </>
    )
}

export const ControlledCheckbox = () => {
    const [inputCheckbox, setInputCheckbox] = useState<boolean>(false)

    const changeInputCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        setInputCheckbox(e.currentTarget.checked)
    }

    return (
        <>
            <input type="checkbox" checked={inputCheckbox} onChange={ changeInputCheckbox }/>
        </>
    )
}

export const ControlledSelect = () => {
    const [inputSelect, setInputSelect] = useState<string | undefined>(undefined)

    const changeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setInputSelect(e.currentTarget.value)
    }
    //событие onChange вешаем на select, поэтому в селекте e.currentTarget будет - select
    //и у него берем .value
    //Если опция поменялась то значение селекта будет значение опции которая выбрана
    return (
        <>
            <select value={inputSelect} onChange={changeSelect}>
                <option>select</option>
                <option value={"1"}>React</option>
                <option value={"2"}>Redux</option>
                <option value={"3"}>Html</option>
            </select>
        </>
    )
}




//FLUX круговорот.
//1)Допустим у нас есть данные - state и что-то что отображается UI, так вот то что отображается картинка на
//экране, не может поменяться, если не изменился state. Мы как программисты, должны воздействовать на то что
//state будет меняться и UI будет перерисовываться: Например мы нажимаем на кнопку, наш код меняет state
//и автоматически React подстроит state под UI - это однонаправленный поток данных, если ui поменялся значит
// поменялось что-то в state.

//2)INPUT впечатывание, появление букв в input означает что UI изменился, а UI не может меняться пока
// не изменился state, поэтому в state есть пустая строка и она является state-ом для этого input
//то-есть input является контролируемым и мы не сможем в нем ни чего напечатать, потому-что из state
// напечатана пустая строка, которая является input value. Что-то напечатать мы можем в нем только тогда,
// когда в инпуте появится событие onChange

//итог: приходит в инпут слово, наш код сетает это слово обратно в стэйт, оно появилось в стэйте, и раз
//оно появилось в стэйте, значит стэйт изменился, Реакт перерисовывает компоненту и отправляет слово в input
//и слово отрисовывается