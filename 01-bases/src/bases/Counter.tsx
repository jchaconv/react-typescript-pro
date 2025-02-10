import { useState } from "react"


interface CounterProps {
    initialValue?: number;
}

export const Counter = ({initialValue = 1}: CounterProps) => {

    const [counter, setCounter] = useState(5);

    const handleClick = () => {
        setCounter( prev => prev + initialValue );
    }


    return (
        <>
            <h2>Counter: {counter}</h2>

            <button onClick={handleClick}
                className="button-border"
            >
                +1
            </button>
        
        </>
    )
}









