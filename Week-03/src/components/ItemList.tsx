import { useEffect, useState } from "react";
import { Machine } from "../types";
import { fetchMachines } from "../utils/api";

const ItemList = () => {
  const [data, setData] = useState<Machine[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    fetchMachines(controller.signal)
      .then(setData)
      .catch(() => setError("Error cargando datos"))
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {data.map((m) => (
        <p key={m.id}>{m.name} - {m.type}</p>
      ))}
    </div>
  );
};

export default ItemList;