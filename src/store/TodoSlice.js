import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTodos } from '../../components/todos/TodoApi';

export const loadTodos = createAsyncThunk(
    'todos/loadTodos',
    async () => {
        const todos = await fetchTodos();
        return todos;
    }
);

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({ id: Date.now(), title: action.payload, completed: false });
        },
        toggleTodo: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        },
        clearTodos: () => {
            return [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadTodos.fulfilled, (state, action) => {
                return action.payload;
            });
    },
});

export const { addTodo, toggleTodo, deleteTodo, clearTodos } = todoSlice.actions;
export default todoSlice.reducer;