import { Machine, Stats, RealTimeData } from "../types";

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export const fetchMachines = async (signal: AbortSignal): Promise<Machine[]> => {
  await delay(1000);

  if (signal.aborted) throw new Error("aborted");

  return [
    { id: 1, name: "Tractor X", type: "tractor" },
    { id: 2, name: "Harvester Z", type: "harvester" },
  ];
};

export const fetchStats = async (): Promise<Stats> => {
  await delay(500);

  return {
    total: 10,
    active: 7,
    percentage: 70,
  };
};

export const fetchRealTimeData = async (): Promise<RealTimeData> => {
  await delay(300);

  return {
    value: Math.floor(Math.random() * 100),
    lastUpdated: new Date().toLocaleTimeString(),
  };
};