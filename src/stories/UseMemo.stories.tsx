import React, {useCallback, useMemo, useState} from 'react';

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

// export const DifficultFactorialExample = () => {
//     const [a, setA] = useState(5)
//     const [b, setB] = useState(5)
//
//     let sumA = 1;
//     let sumB = 1;
//
//     sumB = useMemo(() => {
//         let tempSumA = 1;
//         for (let i = 1; i <= a; i++) {
//             let fake = 0;
//             while (fake < 1000000) {
//                 fake++
//                 const fakeValue = Math.random()
//             }
//             tempSumA = tempSumA * i;
//         }
//         return tempSumA
//     }, [a])
//
//
//     for (let i = 1; i <= b; i++) {
//         sumB *= i;
//     }
//
//     return (
//         <>
//             <input value={a} onChange={(e) => setA(Number(e.currentTarget.value)) }/>
//             <input value={b} onChange={(e) => setB(Number(e.currentTarget.value)) }/>
//             <hr />
//             <div>
//                 Result: {sumA}
//             </div>
//             <div>
//                 Result: {sumB}
//             </div>
//         </>
//     )
// }


const NewMessagesCounter = React.memo((props: { count: number }) => {
    // console.log("NEW-MESSAGE-COUNTER")
    return <div>{props.count}</div>
})
// const Users = React.memo((props: { users: Array<string> }) => {
//     console.log("USERS-TEST")
//     return <div>
//         {props.users.map((u, i) => <div key={i}>{u}</div>)}
//     </div>
// })
//
// //Когда мы фильтруем-то создается новая ссылка, новый объект, и если используем React.memo тогда убивается его полезность
// //Поэтому подсчет юзеров нужно будет за мемоизировать (за кэшировать) с помощью useMemo() который принимает 2 параметра,
// // функцию и зависимости
//
// export const HelpsToReactMemo = () => {
//     console.log("HELPS_FOR_REACT_MEMO")
//     const [count, setCount] = useState(0)
//     const [users, setUsers] = useState(["Nick", "Mike", "Alex"])
//
//     const newArray = useMemo(() => {
//         return users.filter(u => u.indexOf('i') > -1)
//     }, [users])
//
//
//     const addUser = () => {
//         let user = "Vetal " + new Date().getDate()
//         setUsers([...users, user])
//     }
//
//     return (
//         <>
//             <button onClick={() => {setCount(count + 1)}}>{"b-Count"}</button>
//             <button onClick={addUser}>{"b-User"}</button>
//             <NewMessagesCounter count={count}/>
//             <Users users={newArray}/>
//         </>
//     );
// }

//#######################################################################################

// export const LikeUseCallback = () => {
//     console.log("LikeUseCallback")
//     const [count, setCount] = useState(0)
//     const [books, setBooks] = useState(["React", "Redux", "JS", "CSS"])
//
//     const newArray = useMemo(() => {
//         return books.filter(b => b.indexOf('i') > -1)
//     }, [books])
//
//     //при каждой перерисовке функция создает новую функцию, то есть нам кажется что мы передаем
//     //одну и ту же функцию addBook, но по факту наша функция пересоздается в новую, и так как
//     //React.memo не анализирует внутренность функции, а анализирует ссылку на объект, и рас
//     //функция другая значит HOK React.memo не защищает ее от перерисовки.
//     const addBook = () => {
//         let book = "HTML " + new Date().getDate()
//         setBooks([...books, book])
//     }
//
//     return (
//         <>
//             <button onClick={() => {setCount(count + 1)}}>{"b-Count"}</button>
//
//             <NewMessagesCounter count={count}/>
//             {/*передаем callback addBook в компоненту Books*/}
//             <Books books={newArray} onClick={addBook}/>
//         </>
//     );
// }
//
// const Books = React.memo((props: { books: Array<string>, onClick: () => void }) => {
//     console.log("Books-test")
//
//     return <div>
//         {/*кнопка внутри компоненты ждет, что ей в пропсах передадут функцию addBook, callback который можно вызвать*/}
//         {/*что бы добавилась книга и мы передаем callback в компоненту Books.*/}
//         <button onClick={() => props.onClick()}>{"b-User"}</button>
//         {props.books.map((book, i) => <div key={i}>{book}</div>)}
//     </div>
// })


//########################################################################################
//Выносим функцию за пределы компоненты, для того что бы создать ее один раз.
// const addBook = () => {
//     let book = "HTML " + new Date().getDate()
//     setBooks([...books, book])
// }


export const LikeUseCallback = () => {
    //Когда произошла первая отрисовка LikeUseCallback он создал функцию addBook
    //Каждый раз когда вызывается функция то создается такое понятие как (lexical enviroment)
    //И в этом лексическом окружении сидят помимо счетчика массив книг, обычно когда функция отрабатывает до конца
    //лексическое окружение умирает, но не умирает если в нутри есть какая-то внутренняя функция,
    // которая продолжает жить и которая использует значения не из своего лесического окружения то есть не
    //внутри себя, а из окружения с наружи 'const [books, setBooks] = useState(["React", "Redux", "JS", "CSS"])'
    //в данном случае из состояния.
    //Соответственно ЛО для этой функции addBook() в которой нет книг своих, но есть переменная book
    //потому что она создается внутри нее, и если она не находит внутри себя элементы массива, то находит
    //их в ЛО родителя.
    //Получается что функция создалась и запомнилась ч помощью useMemo навсегда, так как нет зависимостей
    //и она будет работать со старыми данными которые создавались.
    console.log("LikeUseCallback")
    const [count, setCount] = useState(0)
    const [books, setBooks] = useState(["React", "Redux", "JS", "CSS"])

    const newArray = useMemo(() => {
        return () => {
            books.filter(b => b.indexOf('i') > -1)
        }
    }, [books])

    //1)по факту мемоизации происходит создание функции addBook и запоминание ее до тех пор, пока у не изменится объект books
    // после выкидывает нам ее на ружу версию которую она запомнила. И теперь закэшированную эту версию будет засовывать в
    //компоненту Books
    const addBook = () => {
        let book = "HTML " + new Date().getDate()
        setBooks([...books, book])
    }

    const memoizedAddBook = useMemo(() => {
        return () => {
            console.log('memoizedAddBook')
            let book = "HTML " + new Date().getDate()
            setBooks([...books, book])
        }
    }, [books])//для перерисовки первой используем функцию addBook и зависимость перерисовки books

    //в место того чтобы использовать такой сложный хук используем хук useCallback
    //потому что в нем нет функции возвращающая функцию, а есть просто функция которую нужно запомнить
    const memoizedAddBook2 = useCallback(() => {
        console.log('memoizedAddBook')
        let book = "HTML " + new Date().getDate()
        setBooks([...books, book])
    }, [books])

    return (
        <>
            <button onClick={() => {setCount(count + 1)}}>{"b-Count"}</button>
            <NewMessagesCounter count={count}/>
            {/*передаем callback addBook в компоненту Books*/}
            <BooksSecret addBook={memoizedAddBook2}/>
        </>
    );
}

export type BooksPropsType = {
    addBook: () => void
}
const BooksSecret = React.memo(({addBook}: BooksPropsType ) => {
    console.log("Books-test")

    return <div>
        <button onClick={addBook}>addBook</button>
        {/*{props.books.map((book, i) => <div key={i}>{book}</div>)}*/}
    </div>
})