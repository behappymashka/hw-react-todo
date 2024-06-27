import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadTodos, toggleTodo, deleteTodo, clearTodos } from './TodoSlice';

const TodoList = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTodos());
    }, [dispatch]);

    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => dispatch(toggleTodo(todo.id))}
                        />
                        {todo.title}
                        <button onClick={() => dispatch(deleteTodo(todo.id))}>Удалить</button>
                    </li>
                ))}
            </ul>
            <div className="todo-list">
                <p>Количество задач: {todos.length}</p>
                <button onClick={() => dispatch(clearTodos())}>Очистить</button>
            </div>

        </div>
    );
};

export default TodoList;