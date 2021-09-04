import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (title: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    const set = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        props.setFilter(e.currentTarget.value as FilterType)
    }

    /*let buttonAllClassName = `${props.filter === 'all' ? s.buttonActive : s.button}`
    let buttonHighClassName = `${props.filter === 'high' ? s.buttonActive : s.button}`
    let buttonMiddleClassName = `${props.filter === 'middle' ? s.buttonActive : s.button}`
    let buttonLowClassName = `${props.filter === 'low' ? s.buttonActive : s.button}`
*/
    const setClass = (filter: FilterType) => {
        return s.button + (props.filter === filter ? ' ' + s.active : '')
    }

    return (
        <div className={s.text}>

            {mappedAffairs}

            {/*<button className={buttonAllClassName} onClick={setAll}>All</button>
            <button className={buttonHighClassName} onClick={setHigh}>High</button>
            <button className={buttonMiddleClassName} onClick={setMiddle}>Middle</button>
            <button className={buttonLowClassName} onClick={setLow}>Low</button>*/}

            <button onClick={set} className={setClass('all')} value={'all'}>All</button>
            <button onClick={set} className={setClass('high')} value={'high'}>High</button>
            <button onClick={set} className={setClass('middle')} value={'middle'}>Middle</button>
            <button onClick={set} className={setClass('low')} value={'low'}>Low</button>

        </div>
    )
}

export default Affairs
