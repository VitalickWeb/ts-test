import React, {useEffect, useState} from 'react';
import analogClock from './image/clock-seiko.png';
import st from './Clock.module.css'


const addZero = (num: number) => num < 10 ? '0' + num : num

//если эта компонента умрет, и уберется с экрана, то сайдэффект останется из-за функции setInterval
//так как асинхронность, которая поражадается браузером продолжает работать и происходит утечка памяти

export const Clock = () => {
    const [clockAnalog, setClockAnalog] = useState<Date>(new Date())
    const [clockDigit, setClockDigit] = useState<Date>(new Date())
    const [changeMode, setChangeMode] = useState<boolean>(false)
    const [changeTitle, setChangeTitle] = useState<string>('Digit mode')

    const clickChangeMode = () => {
        if (!changeMode) {
            setChangeMode(!changeMode)
            setChangeTitle('Analog mode')
        } else {
            setChangeMode(false)
            setChangeTitle('Digit mode')
        }
    }

    const deg = 6
    let arrowHour = {
        transform: `rotate(${clockAnalog.getHours() * 30}deg)`
    };
    let arrowMinute = {
        transform: `rotate(${clockAnalog.getMinutes() * deg}deg)`
    };
    let arrowSecond =  {
        transform: `rotate(${clockAnalog.getSeconds() * deg}deg)`
    }

    useEffect(() => {
        const intervalID = setInterval(() => {
            setClockAnalog(new Date())
        }, 1000)

        const intervalID2 = setInterval(() => {
            setClockDigit(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
            clearInterval(intervalID2)
        }
    }, [])


    return (
        <div className={st.clock}>
            {changeMode !== true
            ? <div className={st.analogClock}>
                <img src={analogClock} alt=""/>
                <div className={st.hour}>
                    <div className={st.hours} style={arrowHour}></div>
                </div>
                <div className={st.minute}>
                    <div className={st.minutes} style={arrowMinute}></div>
                </div>
                <div className={st.second}>
                    <div className={st.seconds} style={arrowSecond}></div>
                    <div style={arrowSecond}></div>
                </div>
            </div>

            : <div className={st.digitalClockOutside}>
                <div className={st.digitalClockInside}>
                    <span className={st.digit}>{addZero(clockDigit.getHours())}</span>
                    <span className={st.twoDotes}>:</span>
                    <span className={st.digit}>{addZero(clockDigit.getMinutes())}</span>
                    <span className={st.twoDotes}>:</span>
                    <span className={st.digit}>{addZero(clockDigit.getSeconds())}</span>
                </div>
            </div>}
            <div className={st.buttonMode}>
                <button className={st.mode} onClick={clickChangeMode}>{changeTitle}</button>
            </div>
        </div>
    );
};

