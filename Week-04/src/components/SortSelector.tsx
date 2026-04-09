interface Props {
  sort: string;
  setSort: (v: string) => void;
}

const SortSelector = ({ sort, setSort }: Props) => {
  return (
    <select value={sort} onChange={(e) => setSort(e.target.value)}>
      <option value="name">Nombre</option>
      <option value="price">Precio</option>
    </select>
  );
};

export default SortSelector;