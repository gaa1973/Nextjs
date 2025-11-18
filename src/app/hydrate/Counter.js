"use client"; //クライアントコンポーネントであることを示す
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button
      style={{ padding: "8px 16px", fontSize: 16 }}
      onClick={() => setCount(count + 1)}
    >
      カウント: {count}
    </button>
  );
}
