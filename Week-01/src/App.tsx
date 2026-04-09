type MachineType = "tractor" | "harvester" | "irrigation";

type RentalStatus = "active" | "completed";

interface Farmer {
  id: number;
  name: string;
  location: string;
}

interface Machine {
  id: number;
  name: string;
  type: MachineType;
  available: boolean;
}

interface Rental {
  id: number;
  machine: Machine;
  farmer: Farmer;
  status: RentalStatus;
}

function createMachine(
  id: number,
  name: string,
  type: MachineType
): Machine {
  return { id, name, type, available: true };
}

function createFarmer(
  id: number,
  name: string,
  location: string
): Farmer {
  return { id, name, location };
}

function rentMachine(
  machine: Machine,
  farmer: Farmer
): Rental | string {
  if (!machine.available) return "Machine not available";

  machine.available = false;

  return {
    id: Date.now(),
    machine,
    farmer,
    status: "active",
  };
}

function completeRental(rental: Rental): Rental {
  rental.status = "completed";
  rental.machine.available = true;
  return rental;
}

function App() {
  const farmer = createFarmer(1, "Camilo", "Cundinamarca");
  const machine = createMachine(1, "Tractor X", "tractor");

  const rental = rentMachine(machine, farmer);

  return (
    <div>
      <h1>Agrotech</h1>
      <pre>{JSON.stringify(rental, null, 2)}</pre>
      {typeof rental !== "string" && (
        <pre>{JSON.stringify(completeRental(rental), null, 2)}</pre>
      )}
    </div>
  );
}

export default App;