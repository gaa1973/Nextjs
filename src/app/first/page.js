import Link from "next/link";

export default function first() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-7xl font-bold text-blue-500">FirstPage</h1>
        <p className="text-center text-3xl">
          <Link href="/">Topへ</Link>
        </p>
      </div>
    </div>
  );
}
