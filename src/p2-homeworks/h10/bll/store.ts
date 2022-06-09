import loadingReducer from './reducers/loadingReducer'
import themeReducer from './reducers/themeReducer';
import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';


export const store = configureStore({
    reducer: {
        loading: loadingReducer,
        theme: themeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;