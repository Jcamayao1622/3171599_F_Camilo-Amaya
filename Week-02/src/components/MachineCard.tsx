import { Machine } from "../types";

interface Props {
  machine: Machine;
  onDelete: (id: number) => void;
  onEdit: (machine: Machine) => void;
}

const MachineCard = ({ machine, onDelete, onEdit }: Props) => {
  return (
    <div>
      <p>{machine.name}</p>
      <p>{machine.type}</p>
      <p>{machine.available ? "Disponible" : "No disponible"}</p>

      <button onClick={() => onEdit(machine)}>Editar</button>
      <button onClick={() => onDelete(machine.id)}>Eliminar</button>
    </div>
  );
};

export default MachineCard;