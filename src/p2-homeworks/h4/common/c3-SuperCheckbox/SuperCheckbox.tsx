import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import classes from './SuperCheckbox.module.css';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type SuperCheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
}

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeChecked,
        className, spanClassName,
        children, // в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {

        onChange && onChange(e);

        onChangeChecked && onChangeChecked(e.currentTarget.checked);
    }

    const finalSpanClassName = `${classes.spanClassName} ${className ? className : ''}`;

    return (
        <label className={classes.label}>
            <input
                type={'checkbox'}
                onChange={onChangeCallback}
                className={classes.checkbox}
                {...restProps}
            />
            <span className={finalSpanClassName}>{children}</span>
        </label>
    )
}

export default SuperCheckbox;
