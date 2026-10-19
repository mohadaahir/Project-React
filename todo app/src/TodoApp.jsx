import { useEffect, useMemo, useReducer, useState } from 'react'

const STORAGE_KEY = 'daybook-todos'

function readTodos() {
    try {
        const savedTodos = localStorage.getItem(STORAGE_KEY)
        return savedTodos ? JSON.parse(savedTodos) : []
    } catch {
        return []
    }
}

function todoReducer(todos, action) {
    switch (action.type) {
        case 'add':
            return [...todos, action.todo]
        case 'toggle':
            return todos.map((todo) =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo,
            )
        case 'delete':
            return todos.filter((todo) => todo.id !== action.id)
        case 'clear-completed':
            return todos.filter((todo) => !todo.completed)
        default:
            return todos
    }
}

function TodoApp() {
    const [todos, dispatch] = useReducer(todoReducer, undefined, readTodos)
    const [text, setText] = useState('')
    const [filter, setFilter] = useState('all')

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

    const visibleTodos = useMemo(() => {
        if (filter === 'active') return todos.filter((todo) => !todo.completed)
        if (filter === 'completed') return todos.filter((todo) => todo.completed)
        return todos
    }, [filter, todos])

    const activeCount = todos.filter((todo) => !todo.completed).length
    const completedCount = todos.length - activeCount

    function handleSubmit(event) {
        event.preventDefault()
        const task = text.trim()
        if (!task) return

        dispatch({
            type: 'add',
            todo: { id: crypto.randomUUID(), text: task, completed: false },
        })
        setText('')
    }

    return (
        <main className="todo-shell">
            <header className="page-header">
                <a className="wordmark" href="#today" aria-label="Daybook home">
                    <span className="wordmark-mark" aria-hidden="true">D</span>
                    daybook
                </a>
                <span className="header-note">A little more room to think.</span>
            </header>

            <section className="todo-panel" id="today" aria-labelledby="page-title">
                <div className="section-kicker"><span /> YOUR SPACE, YOUR PACE</div>
                <div className="title-row">
                    <div>
                        <p className="today-label">TODAY'S LIST</p>
                        <h1 id="page-title">Make it happen<span>.</span></h1>
                    </div>
                    <div className="task-total" aria-label={`${activeCount} tasks left`}>
                        <strong>{String(activeCount).padStart(2, '0')}</strong>
                        <span>left to do</span>
                    </div>
                </div>

                <form className="add-form" onSubmit={handleSubmit}>
                    <label className="sr-only" htmlFor="new-task">Add a task</label>
                    <span className="add-mark" aria-hidden="true">+</span>
                    <input
                        id="new-task"
                        type="text"
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                        placeholder="What needs your attention?"
                        autoComplete="off"
                        maxLength={120}
                    />
                    <button className="add-button" type="submit" disabled={!text.trim()}>
                        Add task <span aria-hidden="true">↗</span>
                    </button>
                </form>

                <div className="list-toolbar">
                    <div className="filter-tabs" role="group" aria-label="Filter tasks">
                        {['all', 'active', 'completed'].map((option) => (
                            <button
                                className={filter === option ? 'filter-tab is-selected' : 'filter-tab'}
                                key={option}
                                type="button"
                                aria-pressed={filter === option}
                                onClick={() => setFilter(option)}
                            >
                                {option[0].toUpperCase() + option.slice(1)}
                                {option === 'all' && <span className="filter-count">{todos.length}</span>}
                            </button>
                        ))}
                    </div>
                    {completedCount > 0 && (
                        <button
                            className="clear-button"
                            type="button"
                            onClick={() => dispatch({ type: 'clear-completed' })}
                        >
                            Clear completed
                        </button>
                    )}
                </div>

                {visibleTodos.length > 0 ? (
                    <ul className="todo-list">
                        {visibleTodos.map((todo) => (
                            <li className={todo.completed ? 'todo-item is-completed' : 'todo-item'} key={todo.id}>
                                <label className="todo-label">
                                    <input
                                        type="checkbox"
                                        checked={todo.completed}
                                        onChange={() => dispatch({ type: 'toggle', id: todo.id })}
                                    />
                                    <span className="custom-check" aria-hidden="true" />
                                    <span className="todo-text">{todo.text}</span>
                                </label>
                                <button
                                    className="delete-button"
                                    type="button"
                                    aria-label={`Delete ${todo.text}`}
                                    onClick={() => dispatch({ type: 'delete', id: todo.id })}
                                >
                                    <span aria-hidden="true">×</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="empty-state" aria-live="polite">
                        <span className="empty-mark" aria-hidden="true">{filter === 'completed' ? '✓' : '—'}</span>
                        <p>{filter === 'completed' ? 'Nothing completed just yet.' : filter === 'active' ? 'You’re all caught up.' : 'A fresh page. Add your first task above.'}</p>
                    </div>
                )}

                <footer className="list-footer">
                    <span>{todos.length === 1 ? '1 task in your list' : `${todos.length} tasks in your list`}</span>
                    <span className="footer-spark" aria-hidden="true">✳</span>
                    <span>One thing at a time.</span>
                </footer>
            </section>
            <p className="page-footnote">Small steps count. Keep going.</p>
        </main>
    )
}

export default TodoApp