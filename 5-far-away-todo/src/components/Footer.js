export default function Stats({ items }) {
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const precentage = Math.round((packedItems / numItems) * 100);

  if (!numItems)
    return (
      <footer className="stats">
        <em>Start adding some item to you packing list.😎</em>
      </footer>
    );
  return (
    <footer className="stats">
      <em>
        {precentage === 100
          ? "you got everything! Ready to go ✈️"
          : `💼 You have ${numItems} items on your list, and you already packed
        ${packedItems} (${precentage}%)`}
      </em>
    </footer>
  );
}
