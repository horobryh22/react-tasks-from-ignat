import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import classes from './Affairs.module.css';

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs({data, setFilter, deleteAffairCallback}: AffairsPropsType) {
    const mappedAffairs = data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={deleteAffairCallback}
        />
    ))

    const setAll = () => {
        setFilter('all')
    };
    const setHigh = () => {
        setFilter('high')
    };
    const setMiddle = () => {
        setFilter('middle')
    };
    const setLow = () => {
        setFilter('low')
    };

    return (
        <div>

            {mappedAffairs}

            <button className={classes.buttonFilter} onClick={setAll}>All</button>
            <button className={classes.buttonFilter} onClick={setHigh}>High</button>
            <button className={classes.buttonFilter} onClick={setMiddle}>Middle</button>
            <button className={classes.buttonFilter} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
