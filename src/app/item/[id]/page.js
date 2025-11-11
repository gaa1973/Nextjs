export default function ItemPage({ params }) {
  return (
    <div>
      <h2>アイテム詳細</h2>
      <p>ID: {params.id}</p>
    </div>
  );
}
