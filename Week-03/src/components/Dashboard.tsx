import ItemList from "./ItemList";
import StatsCard from "./StatsCard";
import RealTimeIndicator from "./RealTimeIndicator";

const Dashboard = () => {
  return (
    <div>
      <h1>Agrotech Dashboard</h1>
      <StatsCard />
      <RealTimeIndicator />
      <ItemList />
    </div>
  );
};

export default Dashboard;