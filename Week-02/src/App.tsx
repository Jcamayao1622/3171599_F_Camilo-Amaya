import { useState } from "react";
import { Machine } from "./types";
import Header from "./components/Header";
import MachineForm from "./components/MachineForm";
import MachineList from "./components/MachineList";

function App() {
  const [machines, setMachines] = useState<Machine[]>([]);
  const [editingMachine, setEditingMachine] = useState<Machine | null>(null);

  const addOrUpdate = (machine: Machine) => {
    if (editingMachine) {
      setMachines(
        machines.map((m) =>
          m.id === machine.id ? machine : m
        )
      );
      setEditingMachine(null);
    } else {
      setMachines([...machines, machine]);
    }
  };

  const deleteMachine = (id: number) => {
    setMachines(machines.filter((m) => m.id !== id));
  };

  return (
    <div>
      <Header />

      <MachineForm
        onSubmit={addOrUpdate}
        editingMachine={editingMachine}
      />

      <MachineList
        machines={machines}
        onDelete={deleteMachine}
        onEdit={setEditingMachine}
      />
    </div>
  );
}

export default App;