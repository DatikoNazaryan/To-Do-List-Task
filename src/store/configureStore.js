import { configureStore } from '@reduxjs/toolkit';

import taskReducer from './slices/taskSlice';
import themeReducer from './slices/theme';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    isDarkTheme: themeReducer
  }
});

export default store;
