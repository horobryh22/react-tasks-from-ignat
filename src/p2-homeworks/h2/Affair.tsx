import React from 'react'
import {AffairType} from './HW2';
import classes from './Affairs.module.css';

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

export const Affair: React.FC<AffairPropsType> = ({affair, deleteAffairCallback}) => {

    const deleteCallback = () => {
        deleteAffairCallback(affair._id);
    }

    const priorityClassName = classes[affair.priority];

    return (
        <div className={classes.affair}>
            <div className={classes.affairName}>{affair.name}</div>
            <div
                className={priorityClassName}> {affair.priority}</div>
            <button className={classes.buttonClose} onClick={deleteCallback}>X</button>
        </div>
    )
}

