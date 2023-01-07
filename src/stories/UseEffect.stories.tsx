import React, {useEffect, useState} from 'react';
//значение, которое меняется в useState всегда содержится в хранилище react

export default {
    title: 'UseEffect demo',
};

const generateCount = () => {
    return 1
}
//callback function содержит спец логику которую можно назвать типа эффектом или side-эффектом в хуке useEffect
//side-эффект - это например запрос на сервер - асинхронная штука сторонний эффект, где-то там за компонентой
//что-то происходит к примеру setInterval. Любая асинхронность это side-эффект, который запрещен в reducers
//или components так как это чистые функции.
//Какие-то грязные запросы, если и можно делать в функциональной компоненте, то это внутри callback переданной
//в useEffect.
//1)происходит отрисовка, возвращает компонента единицу, выводится консоль лог.
//2)фиксируется UseEffect что его нужно выполнить, но переданная в useEffect callback функция не запускается
//3)react получает от компоненты jsx отрисовывает его, вмонтирует компоненту
//4)запускается callback функция, которая передается в useEffect. То-есть сначала происходит отрисовка контента,
// а потом только запускается UseEffect!!!
export const ExampleUseEffect = () => {
    console.log("ExampleUseEffect")
    const [fake, setFake] = useState<number>(generateCount)
    const [count, setCount] = useState<number>(generateCount)// [0, setCount(newValue) {}]
    //при клике на добавление счетчика идет перерисовка useEffect - такое иногда бывает нужно для
    //

    useEffect(() => {
        //В данном случае при каждой перерисовке useEffect срабатывает
        console.log("useEffect every render")
        document.title = count.toString()//изменение title заголовка
        //api.getUsers.then('')
        //setInterval
        //indexedDB
        //document.getElementById()
    })

    useEffect(() => {
        //В данном случае срабатывает только один раз когда компонента вмонтировалась
        console.log("useEffect only first render (componentDidMount)")
        document.title = count.toString()//изменение title заголовка
    }, [])

    useEffect(() => {
        //Если в зависимость что-то передаем, например fake отрисует после первого рендера и когда
        //fake поменяется
        console.log("useEffect every render and fake change")
        document.title = count.toString()//изменение title заголовка
    }, [fake])

    return (
        <>
            <button onClick={() => {setCount(state => state + 1)}}>{"count+"}</button>
            <button onClick={() => {setFake(state => state + 1)}}>{"fake+"}</button>
            <span>{count}</span>
            <span>{fake}</span>
        </>
    );
}

//##############################################################################################################

let addZero = (num: number) => {
    if (num >= 0 && num <= 9) {
        return '0' + num;
    } else {
        return num;
    }
}

export const ExampleSetTimeOut = () => {
    console.log("ExampleSetTimeOut")
    const [date, setDate] = useState(new Date())
    const [count, setCount] = useState<number>(generateCount)// [0, setCount(newValue) {}]

    useEffect(() => {
        //Все асинхронные операции мы должны делать, как и запросы на сервер внутри useEffect
        // console.log("click")
        //setTimeout используется для задержки какого нибудь события
        setTimeout(() => {
            console.log("click")
            document.title = count.toString()//изменение title заголовка
        }, 1000)
        //Чаще всего зависимости будут зависеть от пропсов либо от локального стэйта
    }, [count])//если зависимости от пропсов, то сюда добавляем, что лежит в пропсах

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())//возвращаемое значение делается новым state
        }, 1000)
    }, [])

    return (
        <>
            <button onClick={() => {setCount(state => state + 1)}}>{"count+"}</button>
            {/*<button onClick={() => {setTimer(state => state + 1)}}>{"timer+"}</button>*/}
            <span>{count} </span>
            <span>Clock: {addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds())}</span>
        </>
    );
}