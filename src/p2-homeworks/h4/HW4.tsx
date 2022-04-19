import React, {ChangeEvent, useState} from 'react';
import SuperInputText from './common/c1-SuperInputText/SuperInputText';
import classes from './HW4.module.css';
import SuperButton from './common/c2-SuperButton/SuperButton';
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox';

function HW4() {
    const [text, setText] = useState<string>('');
    const [error, setError] = useState<null | string>(null);

    const showAlert = () => {
        if (text.trim()) {
            alert(text);
        } else {
            setError('Your password is not correct');
            alert('Your password is not correct');
        }
        setText('');
    }

    const [checked, setChecked] = useState<boolean>(false);
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked);

    return (
        <div>
            <hr/>
            <h3>Fourth Homework:</h3>

            <div className={classes.column}>
                <SuperInputText
                    value={text}
                    onChangeText={setText}
                    onChangeError={setError}
                    onEnter={showAlert}
                    error={error}
                    placeholderName={'Enter your password'}
                    divClassName={classes.testSpanError} // это работает
                />

                <SuperInputText
                    className={classes.green} // это работает также
                />

                {/*----------------------------------------------------*/}

                <SuperButton>
                    default
                </SuperButton>

                <SuperButton
                    red // пропсу с булевым значением не обязательно указывать true
                    onClick={showAlert}
                >
                    delete {/*// название кнопки попадёт в children*/}
                </SuperButton>

                <SuperButton disabled>
                    disabled
                </SuperButton>

                {/*----------------------------------------------------*/}

                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    some text {/*// этот текст попадёт в children*/}
                </SuperCheckbox>

                {/*// onChange тоже должен работать*/}
                <SuperCheckbox checked={checked} onChange={testOnChange}/>
            </div>
        </div>
    )
}

export default HW4;
