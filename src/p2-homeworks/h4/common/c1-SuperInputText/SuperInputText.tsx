import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, FocusEvent, KeyboardEvent} from 'react'
import classes from './SuperInputText.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperInputTextPropsType = Omit<DefaultInputPropsType, 'type'> & { // и + ещё пропсы которых нет в стандартном инпуте и также в этой строке мы говорим, что нам не нужен
    onChangeText?: (value: string) => void                             // атрибут type из атрибутов стандартного инпута
    onChangeError?: (error: string | null) => void
    onEnter?: () => void
    error?: string | null
    divClassName?: string
    placeholderName?: string
}

const SuperInputText: React.FC<SuperInputTextPropsType> = (
    {
        // type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeText,
        onKeyPress, onEnter,
        error,
        className, divClassName,
        onChangeError,
        placeholderName,
        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const finalDivClassName = `${classes.errorBox} ${error ? classes.errorMessage : ''} ${divClassName ? divClassName : ''}`;
    const finalInputClassName = `${classes.superInput} ${error ? classes.errorInput : ''} ${className ? className : ''}`;

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);

        onChangeText && onChangeText(e.currentTarget.value);
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {

        onChangeError && error && onChangeError(null); // обнуляем нашу ошибку если она у нас была

        onKeyPress && onKeyPress(e);

        onEnter && e.key === 'Enter' && onEnter();
    }

    const onBlurInputHandler = (e: FocusEvent<HTMLInputElement>) => { // использую здесь эту функцию, чтобы при потере фокуса,
        if (e.currentTarget.value !== '') e.currentTarget.focus();         // placeholder не возвращался обратно в инпут, если в нем не
    }                                                                      // пустой value

    return (
        <>
            <label className={classes.label}>
                <input
                    type={'text'}
                    onChange={onChangeCallback}
                    onKeyPress={onKeyPressCallback}
                    className={finalInputClassName}
                    onBlur={onBlurInputHandler}

                    {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
                />
                <span className={classes.placeholder}>{placeholderName}</span>
            </label>
            <div className={finalDivClassName}>{error}</div>
        </>
    )
}

export default SuperInputText
