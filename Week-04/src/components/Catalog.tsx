import { useState } from "react";
import { machines } from "../data/item";
import ItemList from "./ItemList";
import SearchBar from "./SearchBar";
import FilterPanel from "./FilterPanel";
import SortSelector from "./SortSelector";

const Catalog = () => {
  const [search, setSearch] = useState("");
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [sort, setSort] = useState("name");

  let filtered = machines.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  if (onlyAvailable) {
    filtered = filtered.filter((m) => m.available);
  }

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "price") return a.price - b.price;
    return a.name.localeCompare(b.name);
  });

  return (
    <div>
      <h1>Agrotech Catalog</h1>

      <SearchBar search={search} setSearch={setSearch} />
      <FilterPanel
        onlyAvailable={onlyAvailable}
        setOnlyAvailable={setOnlyAvailable}
      />
      <SortSelector sort={sort} setSort={setSort} />

      <p>Total: {sorted.length}</p>

      <ItemList items={sorted} />
    </div>
  );
};

export default Catalog;