"use client";

import { useState } from "react";

export default function AddUserForm({ addUser }) {
  const [name, setName] = useState("");

  return (
    <form
      action={async (formData) => {
        await addUser(formData);
        setName(""); // 入力クリア
      }}
      style={{ marginTop: 20 }}
    >
      <input
        name="name"
        value={name}
        placeholder="名前"
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">追加</button>
    </form>
  );
}
