import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useAppDispatch, useTypedSelector} from './bll/store';
import {changeLoadingStatus} from './bll/reducers/loadingReducer';
import classes from './HW10.module.css';
import themes from './../h12/HW12.module.css'

function HW10() {

    const dispatch = useAppDispatch();
    const theme = useTypedSelector(state => state.theme.currentTheme);
    const loading = useTypedSelector(state => state.loading.isLoading);

    const setLoading = () => {
        dispatch(changeLoadingStatus());
        setTimeout(() => {
            dispatch(changeLoadingStatus());
        }, 3000);
    };

    return (
        <div>
            <hr/>
            <h3 className={themes[theme + '-text']}>Tenth Homework:</h3>
            <div className={classes.container}>
                {loading
                    ? <div className={classes.preloaderContainer}></div>
                    : <SuperButton onClick={setLoading}>loading...</SuperButton>}
            </div>

        </div>
    )
}

export default HW10;
