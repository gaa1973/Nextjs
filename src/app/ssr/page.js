export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();

  return (
    <div style={{ padding: 20 }}>
      <h1>SSR Page</h1>
      <p>サーバーで取得したデータ</p>
      <h2>{data.title}</h2>
      <p>{data.body} </p>
    </div>
  );
}
