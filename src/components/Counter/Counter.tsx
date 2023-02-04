import { useState } from "react";

// This is a Counter Component
const Counter = () => {
    const [count, setCount] = useState(0);

    const increase = () => setCount(count + 1);
    const minus = () => setCount(count - 1);

    return (
        <>
            <button onClick={increase}>+</button>
            <h1>{count}</h1>
            <button onClick={minus}>-</button>
        </>
    );
};

export default Counter;