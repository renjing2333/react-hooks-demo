import React, { useState, createContext } from 'react';
import { Counter } from './Counter';

export const CountContext = createContext();

function Example4() {
    const [ count, setCount ] = useState(0);
    return (
        <div>
            <p>you clicked {count} times</p>
            <button onClick={()=> {setCount(count+1)}}>click me</button>
            <CountContext.Provider value={count}>
                <Counter />
            </CountContext.Provider>
        </div>
    )
}

export default Example4;