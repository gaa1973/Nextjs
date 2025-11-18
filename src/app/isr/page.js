export default async function Page(){
  const res = await fetch("http://localhost:3000/api/time",{ next:{ revalidate: 10 }});//5秒ごとに更新

  const data = await res.json();

  return (
    <div style={{ padding:20 }}>
      <h1>ISR</h1>
      <p>現在時刻：</p>
      <pre>{JSON.stringify(data,null,2)}</pre>
    </div>
  );
}