import React, {useState, KeyboardEvent, useEffect} from 'react';
import st from './Select.module.css'

export type ArrElemType = {
    id: string
    title: string
}

export type SelectPropsType = {
    value: string
    onChangeValue: (valueId: string, title: string) => void
    elements: Array<ArrElemType>
    collapsed: (blur: boolean) => void
    setCollapsed: boolean
}

export const Select = ({
                           value,
                           onChangeValue,
                           elements,
                           setCollapsed,
                           collapsed,
                       }: SelectPropsType) => {

    const [hoveredTitle, setHoveredTitle] = useState<string>(value)//значение строки title
    // console.log(value, hoveredTitle)
    // const hoveredItem = elements.find(el => el.title === hoveredTitle)


   //useEffect говорит что я буду запускать callback функцию, если изменилось что то внутри этих зависимостей
    //в зависимостях мы изменяем значения для hoveredTitle - который должен соответствовать всегда тому значению
    //которое пришло к нам в пропсах, но мы знаем что в пропсах должно прийти к нам одно значение,
    //но когда мы мышкой водим выбирая что то в селекте, элементы должны менятся не реагируя на выбор в значении.

    //Соответственно мы говорим, что зафиксировал один раз, если value изменилось с наружи, но дальше когда мы
    //будем водить мышкой по селекту ни чего не будет происходить
    useEffect(() => {
        setHoveredTitle(value)
    }, [value])

    const renderSelect = elements.map(el => {
        const onChangeValueHandler = () => {
            onChangeValue(el.id, el.title)
            collapsed(false)
        }

        let selected = `${st.listItem}`
        let activeSelect = `${st.hoveredItem}`

        return (
            <li key={el.id} className={el.title === hoveredTitle ? activeSelect : selected}
                onClick={onChangeValueHandler}
                onMouseEnter={() => {
                    setHoveredTitle(el.title)
                }}//в этот момент времени когда мышка пришла к элементу записываем в state событие
            >{el.title}
            </li>
        );
    })

    const onclickChangeOpenCloseHandler = () => {
        collapsed(!setCollapsed)
    }
    const onBlurRemoveSelect = () => {
        collapsed(false)
    }

    const onKeyUpHoveredElement = (e: KeyboardEvent<HTMLDivElement>) => {
        debugger
        for (let i = 0; i < elements.length; i++) {
            if (hoveredTitle === elements[i].title) {
                console.log(elements[i + 1])
                if (elements[i + 1]) {
                    onChangeValue(elements[i + 1].id, elements[i + 1].title)
                    break
                }
            }
        }
    }

    return (
        <div className={st.containerSelect}
             onKeyUp={onKeyUpHoveredElement}
             tabIndex={0}
        >
            <span className={st.widthSelect}
                  onBlur={onBlurRemoveSelect}
                  tabIndex={0}
            >
                <div className={st.selectButton}
                     onClick={onclickChangeOpenCloseHandler}
                >{value}
                </div>
                {setCollapsed &&
                    <span className={st.blockList}>
                        <ul className={st.selectDropDown}>
                            {renderSelect}
                        </ul>
                    </span>
                }
            </span>
        </div>
    );
};




