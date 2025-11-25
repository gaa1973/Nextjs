"use client";

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function UserList() {
  const { data, error, isLoading } = useSWR("/api/users", fetcher, {
    refreshInterval: 3000, // 3秒ごとに更新（任意）
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div>
      <h2>ユーザー一覧（SWR）</h2>
      <ul>
        {data.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}
