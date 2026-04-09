interface Props {
  onlyAvailable: boolean;
  setOnlyAvailable: (v: boolean) => void;
}

const FilterPanel = ({ onlyAvailable, setOnlyAvailable }: Props) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={onlyAvailable}
        onChange={(e) => setOnlyAvailable(e.target.checked)}
      />
      Solo disponibles
    </label>
  );
};

export default FilterPanel;