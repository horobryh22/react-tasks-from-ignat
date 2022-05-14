import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import classes from './SuperRadio.module.css';

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: Array<string>
    onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type,
        name,
        options,
        value,
        onChange,
        onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);

        console.log(e.currentTarget.value);

        onChangeOption && onChangeOption(e.currentTarget.value);
    }


    const mappedOptions = options ? options.map((o, i) => {
        return (
            <label className={classes.label} key={name + '-' + i}>
                <input className={classes.input}
                       type={'radio'}
                       name={name}
                       value={o}
                       onChange={onChangeCallback}
                       checked={o === value}
                       {...restProps}
                />
                <span>{o}</span>
            </label>
        )
    }) : [];

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio;
