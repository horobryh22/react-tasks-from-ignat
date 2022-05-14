import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import classes from './SuperSelect.module.css';

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: Array<string>
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange,
        onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions = options?.map((el, i) => {
        return <option key={i} className={classes.option}>{el}</option>
    })

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e);

        onChangeOption && onChangeOption(e.currentTarget.value);
    }

    return (
        <div className={classes.box}>
            <select className={classes.select} onChange={onChangeCallback} {...restProps}>
                {mappedOptions}
            </select>
        </div>
    )
}

export default SuperSelect;
