import { Machine } from "../types";
import MachineCard from "./MachineCard";

interface Props {
  machines: Machine[];
  onDelete: (id: number) => void;
  onEdit: (machine: Machine) => void;
}

const MachineList = ({ machines, onDelete, onEdit }: Props) => {
  return (
    <div>
      {machines.map((m) => (
        <MachineCard
          key={m.id}
          machine={m}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default MachineList;