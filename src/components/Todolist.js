import React from 'react';

export default function Todolist() {
    const [todo, setTodo] = React.useState({ description: '', date: '' });
    const [todos, setTodos] = React.useState([]);

    const handleAddTodo = () => {
        setTodos([todo, ...todos]);
        setTodo({ description: '', date: '' });
    };

    const handleDoneTodo = (row) => {
        setTodos(todos.filter((todo, index) => index !== row));
    };

    return (
        <div>
            <h1>TodoList With Delete</h1>
            <p>Description:
                <input
                    placeholder='Description'
                    value={todo.description}
                    onChange={e => setTodo({ ...todo, description: e.target.value })}
                />
                Date:
                <input
                    type='date'
                    placeholder='Date'
                    value={todo.date}
                    onChange={e => setTodo({ ...todo, date: e.target.value })}
                />
                <button onClick={handleAddTodo}>Add</button>
            </p>
            <table>
                <thead>
                    <td>
                        Date
                    </td>
                    <td>
                        Description
                    </td>
                </thead>
                <tbody>
                    {
                        todos.map((todo, index) =>
                            <tr key={index}>
                                <td>{todo.date}</td>
                                <td>{todo.description}</td>
                                <td><button onClick={() => handleDoneTodo(index)}>Delete</button></td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}
