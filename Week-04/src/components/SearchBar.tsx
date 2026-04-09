interface Props {
  search: string;
  setSearch: (v: string) => void;
}

const SearchBar = ({ search, setSearch }: Props) => {
  return (
    <input
      placeholder="Buscar..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;