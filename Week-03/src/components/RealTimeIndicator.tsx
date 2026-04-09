import { useEffect, useState } from "react";
import { fetchRealTimeData } from "../utils/api";
import { RealTimeData } from "../types";

const RealTimeIndicator = () => {
  const [data, setData] = useState<RealTimeData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchRealTimeData();
      setData(res);
    };

    fetchData();

    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!data) return <p>Loading realtime...</p>;

  return (
    <div>
      <p>Valor: {data.value}</p>
      <p>Actualizado: {data.lastUpdated}</p>
    </div>
  );
};

export default RealTimeIndicator;