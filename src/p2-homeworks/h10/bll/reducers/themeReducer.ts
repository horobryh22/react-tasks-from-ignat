import {createSlice, PayloadAction} from '@reduxjs/toolkit';


type InitialStateType = typeof initialState

const initialState = {
    currentTheme: 'green'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state: InitialStateType, action: PayloadAction<string>) => {
            state.currentTheme = action.payload;
        }
    }
});

export default themeSlice.reducer;
export const {changeTheme} = themeSlice.actions;
