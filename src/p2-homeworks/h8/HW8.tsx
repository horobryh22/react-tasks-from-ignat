import React, {useState} from 'react'
import {checkByAgeAC, homeWorkReducer, sortUpOrDownAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import classes from './HW8.module.css';
import themes from '../h12/HW12.module.css';
import {useTypedSelector} from '../h10/bll/store';

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople: Array<UserType> = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {

    const theme = useTypedSelector(state => state.theme.currentTheme);
    const [people, setPeople] = useState<Array<UserType>>(initialPeople)

    const finalPeople = people.map((p: UserType) => (
        <div key={p._id} className={classes.string}>
            <div>{p.name}</div>
            <div>{p.age}</div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortUpOrDownAC('up')));
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortUpOrDownAC('down')));
    const sortByAge = () => setPeople(homeWorkReducer(initialPeople, checkByAgeAC(18)));

    return (
        <div>
            <hr/>
            <h3 className={themes[theme + '-text']}>Eighth Homework:</h3>

            <div className={classes.table}>{finalPeople}</div>

            <div className={classes.buttonsBox}>
                <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
                <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
                <div><SuperButton onClick={sortByAge}>check 18</SuperButton></div>
            </div>
        </div>
    )
}

export default HW8;
