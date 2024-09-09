'use client'

import { useState } from "react";

function Increment() {
    const [count, setCount] = useState(0);
    let a;
    if(typeof window !== 'undefined') {
        a = localStorage.getItem('a')
    }
   
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount((prev) => prev + 1)}>Inc</button>
            <button onClick={() => setCount((prev) => prev - 1)}>Dec</button>
        </div>
    )
}

export {Increment}