export default function CategoryPage({ params }) {
  return (
    <div>
      <h2>カテゴリーとIDを取得</h2>
      <p>カテゴリー: {params.category}</p>
      <p>ID: {params.id}</p>
    </div>
  );
}
