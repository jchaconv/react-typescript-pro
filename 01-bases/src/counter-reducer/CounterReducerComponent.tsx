import { useReducer } from "react";
import { CounterState } from "./interfaces/interfaces";
import { counterReducer } from "./state/counterReducer";
import * as actions from "./actions/actions";


const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0
}


export const CounterReducerComponent = () => {

    const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);


    const handleReset = () => {
        //dispatch({ type: 'reset' })
        dispatch( actions.doReset() )
    }

    const increaseBy = (value: number) => {
        dispatch( actions.doIncreaseBy(value) )
    }


    return (
        <>
            <h2>CounterReducerComponent:</h2>
            <pre>
                {JSON.stringify(counterState, null, 2)}
            </pre>

            <button onClick={() => increaseBy(1)}
                className="button-border"
            >
                +1
            </button>

            <button onClick={() => increaseBy(5)}
                className="button-border"
            >
                +5
            </button>

            <button onClick={() => increaseBy(10)}
                className="button-border"
            >
                +10
            </button>

            <button onClick={handleReset}
                className="button-border"
            >
                Reset
            </button>

        </>
    )
}









