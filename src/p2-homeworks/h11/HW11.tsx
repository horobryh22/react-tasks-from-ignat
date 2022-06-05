import React, {useState} from 'react';
import SuperRange from './common/c7-SuperRange/SuperRange';
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange';

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);
    const [values, setValues] = useState<[number, number]>([value1, value2])

    return (
        <div>
            <hr/>
            <h3>Eleventh Homework:</h3>
            <div>
                <SuperRange onChangeRange={setValue1} value={value1}/>
            </div>
            <br/>
            <div>
                <SuperDoubleRange min={0} max={100} value={values} onChangeRange={setValues}/>
            </div>
        </div>
    )
}

export default HW11
