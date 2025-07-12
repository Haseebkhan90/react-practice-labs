import React, { useState } from "react";
const Counter: React.FC = () => {
    const [count, setCount] = useState(0);

    return (
        <div style={{
            border: '2px dashed teal',
            padding: '20px',
            borderRadius: '10px',
            backgroundColor: '#e0f7f7'
        }}>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count + 1)} style={{ marginRight: '10px' }}>
                ➕ Increase
            </button>
            <button onClick={() => setCount(count - 1)}>
                ➖ Decrease
            </button>
        </div>
    )
}

export default Counter;