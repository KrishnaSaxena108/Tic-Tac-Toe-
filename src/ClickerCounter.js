import React, { useRef } from 'react';

const ClickerCounter = () => {
    const countRef = useRef(0);
    const displayRef = useRef(null);

    const handleIncrement = () => {
        countRef.current += 1;
        displayRef.current.innerText = countRef.current;
    };

    const handleDecrement = () => {
        countRef.current -= 1;
        displayRef.current.innerText = countRef.current;
    };

    return (
        <div>
            <h1 ref={displayRef}>0</h1>
            <button onClick = {handleIncrement}>Increment</button>
            <br />
            <button onClick = {handleDecrement}>Decrement</button>
        </div>
    );
};

export default ClickerCounter;