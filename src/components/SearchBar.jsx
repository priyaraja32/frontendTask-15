import { Search, X } from "lucide-react";

export default function SearchBar({ setSearch }) {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const clearSearch = () => {
    setSearch("");
  };

  return (
    <div className="relative w-full">

      <Search
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-rose-400 pointer-events-none"
      />

      <input
        type="text"
        placeholder="Search products..."
        onChange={handleChange}
        className="
          w-full
          h-14
          pl-12
          pr-12
          rounded-2xl
          bg-white
          text-gray-900
          placeholder:text-gray-400
          border border-rose-100
          shadow-sm
          outline-none
          transition-all
          duration-300
          focus:border-rose-400
          focus:ring-4
          focus:ring-rose-100
        "
      />

      <button
        type="button"
        onClick={clearSearch}
        className="
          absolute
          right-4
          top-1/2
          -translate-y-1/2
          w-7
          h-7
          rounded-full
          bg-rose-50
          text-rose-400
          flex
          items-center
          justify-center
          hover:bg-rose-500
          hover:text-white
          transition
        "
      >
        <X size={15} />
      </button>

    </div>
  );
}