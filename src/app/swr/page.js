
import SWRTime from "./swr-client";
export default async function Page(){
  const res = await fetch("http://localhost:3000/api/time",{//APIにアクセスしてデータを取得する
    cache:"no-cache"//キャッシュしない
  });

  const initail = await res.json();

  return (
    <div style={{padding:20}}>
      <h1>SWRを使ってみる</h1>
      <SWRTime initialData={initail}></SWRTime>
    </div>
  );
}