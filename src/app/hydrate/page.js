import Counter from "./Counter";

export default async function Page() {
  // サーバー側でデータを取得
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();

  return (
    <div style={{ padding: 20 }}>
      <h1>Hydrate</h1>
      <h2>サーバーで生成された静的部分</h2>
      <p>{data.title}</p>
      <p>{data.body}</p>

      <hr />

      <h2>ここにクライアントコンポーネントを入れる</h2>
      <Counter />
    </div>
  );
}
