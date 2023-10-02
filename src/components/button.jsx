import React, { useState, useEffect } from "react";
export default function Counter() {
    const [count, setCount] = useState(0);

    // fungsi tambah
    const countUp = () => {
        setCount(count + 1)
    };

    // fungsi kurang
    const countDown = () => {
        setCount(count - 1);
    };
    const resetCount = () => {
        setCount(count == 0);
    };

    useEffect(() => {
        if (count == 10) {
            alert("Kamu telah mencapai angka 10");
            resetCount
        }
        else {
            console.log({ count });
        }
    }, [count])
    return (
        <div>
            <button onClick={countUp}>Up</button>
            <button onClick={countDown}>Down</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    );
}