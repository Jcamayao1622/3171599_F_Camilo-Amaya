import { useState, useEffect } from "react";
import { Machine } from "../types";

interface Props {
  onSubmit: (machine: Machine) => void;
  editingMachine: Machine | null;
}

const MachineForm = ({ onSubmit, editingMachine }: Props) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    if (editingMachine) {
      setName(editingMachine.name);
      setType(editingMachine.type);
    }
  }, [editingMachine]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) return alert("Nombre requerido");

    onSubmit({
      id: editingMachine ? editingMachine.id : Date.now(),
      name,
      type,
      available: true,
    });

    setName("");
    setType("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Tipo"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />

      <button type="submit">
        {editingMachine ? "Actualizar" : "Agregar"}
      </button>
    </form>
  );
};

export default MachineForm;