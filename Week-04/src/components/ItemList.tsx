import { Machine } from "../types";
import ItemCard from "./ItemCard";

const ItemList = ({ items }: { items: Machine[] }) => {
  if (items.length === 0) return <p>No hay resultados</p>;

  return (
    <div>
      {items.map((i) => (
        <ItemCard key={i.id} item={i} />
      ))}
    </div>
  );
};

export default ItemList;