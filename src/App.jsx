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
      resetCount
    }
    else {
      console.log({ count });
    }
  }, [count])

  return (
    <div className="App">
      <h1>Tugas Mod 3 oleh Kelompok 28</h1>
      <h1>{count}</h1>
      <button onClick={countUp}>Up</button>
      <button onClick={countDown}>Down</button>
      {count === 10 && (
        <div>
          <h2>Selamat! Anda mencapai angka 10!</h2>
          <button onClick={resetCount}>Reset</button>
        </div>)}
    </div>
  );
}