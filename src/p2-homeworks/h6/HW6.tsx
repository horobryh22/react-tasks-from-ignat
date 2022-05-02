import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'

function HW6() {

    const startValue = restoreState<string>('editable-span-value', '');

    const [value, setValue] = useState<string>(startValue);

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        const state = restoreState<string>('editable-span-value', '')
        setValue(state)
    }

    return (
        <div>
            <hr/>
            <h3>Sixth Homework:</h3>
            <div>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />
            </div>
            <SuperButton onClick={save}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>
        </div>
    )
}

export default HW6
