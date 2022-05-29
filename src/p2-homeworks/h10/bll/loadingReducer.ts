import {createSlice} from '@reduxjs/toolkit';

type InitialStateType = typeof initialState;

const initialState = {
    isLoading: false
}

const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        changeLoadingStatus: (state: InitialStateType) => {
            state.isLoading = !state.isLoading;
        }
    }
});

export default loadingSlice.reducer;
export const {changeLoadingStatus} = loadingSlice.actions;
