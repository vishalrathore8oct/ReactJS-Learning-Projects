import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>Counter App</h1>
            <h2>Counter: {count} </h2>
            <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
            <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </>
    )
}

export default Counter