import React, {ChangeEvent, useRef, useState} from 'react'


export default {
    title: 'input',
};

export const UncontrolledInput = () => <input />;
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    return (
        <><input
            onChange={(e) => {
                let changeValue = e.currentTarget.value//здесь получаем значение инпута
                setValue(changeValue)
            }}
        /> - {value}</>
    );
};

export const getValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    }

    return (
        <><input ref={inputRef} /><button onClick={save}>save</button> - actual value: {value}</>
    );
};

export const ControlledInput = () => {
    const [value, setValue] = useState('')
    const clickEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <input
            value={value}
            onChange={clickEventHandler}
        />
    )
};

export const ControlledCheckbox = () => {
    const [parent, setParent] = useState(true)
    const clickEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParent(e.currentTarget.checked)
    }

    return (
        <input
            type={"checkbox"}
            checked={parent}
            onChange={clickEventHandler}
        />
    )
};

export const ControlledSelect = () => {
    const [parentSelect, setParentSelect] = useState<string | undefined>(undefined)

    const changeValue = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentSelect(e.currentTarget.value)
    }

    return (
        <select value={parentSelect} onChange={changeValue}>
            <option>none</option>
            <option value={'1'}>Минск</option>
            <option value={'2'}>Киев</option>
            <option value={'3'}>Лондон</option>
        </select>
    )
};




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