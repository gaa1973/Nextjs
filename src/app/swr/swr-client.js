"use client";

import useSWR from "swr";//SWRを利用するために読み込む必要がある

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function SWRTime({ initialData }){
  const { data, isLoading } = useSWR("/api/time",fetcher,{
    fallbackData:initialData,//初回SSRデータを使用
    refreshInterval:2000//更新間隔を指定。2000で2秒間隔
  });

  return (
    <div style={{marginTop:"20px",padding:"10px",border:"1px solid #999"}}>
      <h2>現在時刻</h2>
      {isLoading ? (<p>Loading...</p>):(<pre>{JSON.stringify(data,null,2)}</pre>)}
    </div>
  );
}