"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() => setCount(count + 1)}
      style={{ padding: "10px", marginTop: "10px" }}
    >
      ローカルカウント：{count}
    </button>
  );
}
