import React from 'react'
import s from './StatisticButtons.module.css'

const StatisticButtons = () => {
    return (
        <>
            <button className={s.btn}   type='button'>Все расходы</button>
            <button className={s.btn}   type='button'>Все доходы</button>
        </>
    )
}
export default StatisticButtons;