import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isDarkThemeActive: false,
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        isDarkMode(state) {
            state.isDarkThemeActive = !state.isDarkThemeActive;
        }
    }
});

export const { isDarkMode } = themeSlice.actions;

export default themeSlice.reducer;
