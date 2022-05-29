import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useAppDispatch, useTypedSelector} from './bll/store';
import {changeLoadingStatus} from './bll/loadingReducer';
import classes from './HW10.module.css';

function HW10() {

    const dispatch = useAppDispatch();
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
            <h3>Tenth Homework:</h3>
            <div className={classes.container}>
                {loading
                    ? <div className={classes.preloaderContainer}></div>
                    : <SuperButton onClick={setLoading}>loading...</SuperButton>}
            </div>

        </div>
    )
}

export default HW10;
