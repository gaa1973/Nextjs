export default async function Page() {
  // サーバー側でデータを取得
  const res = await fetch(`http://cieds.jp/json/json.php`);
  const data = await res.json();

  return (
    <div style={{ padding: 20 }}>
      <h1>fetch(キャッシュあり)</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
