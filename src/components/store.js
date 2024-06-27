import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todos/TodoSlice';

export const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
});