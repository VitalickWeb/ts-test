import React, {useState} from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'React.memo demo',
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {
            control: 'color'
        },
    },
};

const NewMessagesCounter = React.memo((props: { count: number }) => {
    console.log("NewMessagesCounter")
    return <div>{props.count}</div>
})

const Users = React.memo((props: { users: Array<string> }) => {
    console.log("USERS")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
})

//в качестве Users Передаем новую компоненту которая вылетит из React.memo и в React.memo передаем свою компоненту UsersTest
//Вызов функции превращается всегда в какой-то новый результат, который из этой функции ретурнится. И вот из этой функции
//HOC возвращаем результат компоненты, которую мы записали в переменную Users
//  В итоге контейнерная компонента из React.memo не будет перезапускать UsersTest если пропсы не изменились.
//const Users = React.memo(UsersTest)

export const HelpsToReactMemo = () => {
    console.log("EXAMPLE")
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(["Nick", "Mike", "Alex"])

    const addUser = () => {
        let user = "Vital " + new Date().getDate()
        setUsers([...users, user])
    }

    return (
        <>
            <button onClick={() => {setCount(count + 1)}}>{"b-Count"}</button>
            <button onClick={addUser}>{"b-User"}</button>
            <NewMessagesCounter count={count}/>
            <Users users={users}/>
        </>
    );
}
