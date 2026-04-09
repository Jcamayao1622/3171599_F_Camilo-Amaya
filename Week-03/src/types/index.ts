export interface Machine {
  id: number;
  name: string;
  type: string;
}

export interface Stats {
  total: number;
  active: number;
  percentage: number;
}

export interface RealTimeData {
  value: number;
  lastUpdated: string;
}