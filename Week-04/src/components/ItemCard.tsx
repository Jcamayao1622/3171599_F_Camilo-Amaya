import { Machine } from "../types";

const ItemCard = ({ item }: { item: Machine }) => {
  return (
    <div>
      <p>{item.name}</p>
      <p>{item.type}</p>
      <p>${item.price}</p>
      <p>{item.available ? "Disponible" : "No disponible"}</p>
    </div>
  );
};

export default ItemCard;