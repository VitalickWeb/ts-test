import React, {useMemo, useState} from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Use.memo demo',
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {
            control: 'color'
        },
    },
};

export const DifficultFactorialExample = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let sumA = 1;
    let sumB = 1;

    sumB = useMemo(() => {
        let tempSumA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 1000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempSumA = tempSumA * i;
        }
        return tempSumA
    }, [a])


    for (let i = 1; i <= b; i++) {
        sumB *= i;
    }

    return (
        <>
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value)) }/>
            <input value={b} onChange={(e) => setB(Number(e.currentTarget.value)) }/>
            <hr />
            <div>
                Result: {sumA}
            </div>
            <div>
                Result: {sumB}
            </div>
        </>
    )
}


const NewMessagesCounter = React.memo((props: { count: number }) => {
    console.log("NEW-MESSAGE-COUNTER")
    return <div>{props.count}</div>
})
const Users = React.memo((props: { users: Array<string> }) => {
    console.log("USERS-TEST")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
})

//Когда мы фильтруем-то создается новая ссылка, новый объект, и если используем React.memo тогда убивается его полезность
//Поэтому подсчет юзеров нужно будет за мемоизировать (за кэшировать) с помощью useMemo() который принимает 2 параметра,
// функцию и зависимости

export const HelpsToReactMemo = () => {
    console.log("HELPS_FOR_REACT_MEMO")
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(["Nick", "Mike", "Alex"])

    const newArray = useMemo(() => {
        return users.filter(u => u.indexOf('i') > -1)
    }, [users])


    const addUser = () => {
        let user = "Vetal " + new Date().getDate()
        setUsers([...users, user])
    }

    return (
        <>
            <button onClick={() => {setCount(count + 1)}}>{"b-Count"}</button>
            <button onClick={addUser}>{"b-User"}</button>
            <NewMessagesCounter count={count}/>
            <Users users={newArray}/>
        </>
    );
}