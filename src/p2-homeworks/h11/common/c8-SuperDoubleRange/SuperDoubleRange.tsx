import React from 'react'
import MultiRangeSlider from '../multiRangeSlider/MultiRangeSlider';
import classes from './SuperDoubleRange.module.css';
import commonClasses from '../styles/commonStyles.module.css'


type SuperDoubleRangePropsType = {
    onChangeRange: (value: [number, number]) => void
    value: [number, number]
    min: number
    max: number
    step?: number
}


const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (props) => {

    const [value1, value2] = props.value;

    return (
        <div className={classes.doubleRangeContainer}>
            <output className={commonClasses.output + ' ' + classes.leftOutput}>{value1}</output>
            <MultiRangeSlider onChange={props.onChangeRange} {...props}/>
            <output className={commonClasses.output + ' ' + classes.rightOutput}>{value2}</output>
        </div>
    )
}

export default SuperDoubleRange
