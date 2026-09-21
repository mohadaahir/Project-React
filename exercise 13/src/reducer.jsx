import { useReducer } from 'react'

const initialState = {
    counterA: 0,
    counterB: 0,
}

function doubleCounterReducer(state, action) {
    switch (action.type) {
        case 'INCREMENT_A':
            return { ...state, counterA: state.counterA + 1 }
        case 'DECREMENT_A':
            return {
                ...state,
                counterA: state.counterA > 0 ? state.counterA - 1 : 0,
            }
        case 'INCREMENT_B':
            return { ...state, counterB: state.counterB + 1 }
        case 'DECREMENT_B':
            return {
                ...state,
                counterB: state.counterB > 0 ? state.counterB - 1 : 0,
            }
        case 'RESET_ALL':
            return initialState
        default:
            return state
    }
}

export default function DoubleCounter() {
    const [state, dispatch] = useReducer(doubleCounterReducer, initialState)

    return (
        <div>
            <h2>Double Counter</h2>

            <div>
                <h3>Counter A: {state.counterA}</h3>
                <button onClick={() => dispatch({ type: 'DECREMENT_A' })} disabled={state.counterA === 0}>
                    - A
                </button>
                <button onClick={() => dispatch({ type: 'INCREMENT_A' })}>+ A</button>
            </div>

            <div>
                <h3>Counter B: {state.counterB}</h3>
                <button onClick={() => dispatch({ type: 'DECREMENT_B' })} disabled={state.counterB === 0}>
                    - B
                </button>
                <button onClick={() => dispatch({ type: 'INCREMENT_B' })}>+ B</button>
            </div>

            <div>
                <button onClick={() => dispatch({ type: 'RESET_ALL' })}>Reset Both</button>
            </div>
        </div>
    )
}
