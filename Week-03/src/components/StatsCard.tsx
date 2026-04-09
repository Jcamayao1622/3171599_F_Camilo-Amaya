import { useEffect, useState } from "react";
import { fetchStats } from "../utils/api";
import { Stats } from "../types";

const StatsCard = () => {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    fetchStats().then(setStats);
  }, []);

  if (!stats) return <p>Cargando stats...</p>;

  return (
    <div>
      <p>Total: {stats.total}</p>
      <p>Activos: {stats.active}</p>
      <p>%: {stats.percentage}%</p>
    </div>
  );
};

export default StatsCard;