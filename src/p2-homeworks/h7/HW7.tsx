import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import {useTypedSelector} from '../h10/bll/store';
import themes from '../h12/HW12.module.css';

const arr = ['x', 'y', 'z']

function HW7() {

    const theme = useTypedSelector(state => state.theme.currentTheme);
    const [value, onChangeOption] = useState(arr[0]);

    return (
        <div>
            <hr/>
            <h3 className={themes[theme + '-text']}>Seventh Homework:</h3>
            <div>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div>
                <SuperRadio
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
        </div>
    )
}

export default HW7
