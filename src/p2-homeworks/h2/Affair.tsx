import React from 'react'
import {AffairType} from './HW2';
import classes from './Affairs.module.css';

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair({affair, deleteAffairCallback}: AffairPropsType) {
    const deleteCallback = () => {
        deleteAffairCallback(affair._id);
    }

    const priorityClassName = (affair.priority === 'high') ? classes.affairPriorityHigh : (affair.priority === 'middle') ? classes.affairPriorityMiddle : classes.affairPriorityLow;

    return (
        <div className={classes.affair}>
            <div className={classes.affairName}>{affair.name}</div>
            <div
                className={priorityClassName}> {affair.priority}</div>
            <button className={classes.buttonClose} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
