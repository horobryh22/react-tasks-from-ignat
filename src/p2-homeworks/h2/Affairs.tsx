import React from 'react'
import {Affair} from './Affair'
import {AffairType, FilterType} from './HW2'
import classes from './Affairs.module.css';

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

export const Affairs: React.FC<AffairsPropsType> = ({data, setFilter, deleteAffairCallback}) => {

    const mappedAffairs = data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={deleteAffairCallback}
        />
    ))

    const onClickButtonHandler = (filter: FilterType) => {
        return () => setFilter(filter);
    }

    return (
        <div>
            {mappedAffairs}
            <button className={classes.buttonFilter} onClick={onClickButtonHandler('all')}>All</button>
            <button className={classes.buttonFilter} onClick={onClickButtonHandler('high')}>High</button>
            <button className={classes.buttonFilter} onClick={onClickButtonHandler('middle')}>Middle</button>
            <button className={classes.buttonFilter} onClick={onClickButtonHandler('low')}>Low</button>
        </div>
    )
}
