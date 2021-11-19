import React, { useContext } from 'react';
import { CountContext } from './Example4.js';


export function Counter() {
    const count = useContext(CountContext)
    return (
        <div>
            <h1>这是counter组件</h1>
            <h2>{count}</h2>
        </div>
    )
}