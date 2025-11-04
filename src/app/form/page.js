"use client";
import { useState } from "react";

export default function FormPage() {
  //フォルダー名と異なる関数名でもOK
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setMessage("名前を入力してください");
      return;
    }
    setMessage(`こんにちは、${name}さん!`);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h1 className="text-xl font-bold mb-4 text-center text-blue-600">
          入力フォーム
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-blue-600">名前</label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            送信
          </button>
        </form>
        {message && (
          <p className="mt-4 text-center font-medium text-blue-600">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
