export default function CategoryFilter({
  cats,
  setSelected,
}) {
  return (
    <div className="w-full">

      {/* Category Title */}

      <div className="mb-4">

        <h3 className="text-sm font-bold text-gray-800">
          Browse by Category
        </h3>

        <p className="text-xs text-gray-400 mt-1">
          Choose a category to explore products
        </p>

      </div>


      {/* Category Buttons */}

      <div className="flex flex-wrap gap-3">

        {/* All Products */}

        <button
          onClick={() => setSelected("all")}
          className="
            px-5
            py-2.5
            rounded-xl
            bg-rose-500
            text-white
            font-semibold
            shadow-md
            shadow-rose-100
            hover:bg-rose-600
            hover:-translate-y-0.5
            transition-all
            duration-200
            whitespace-nowrap
          "
        >
          All Products
        </button>


        {/* Dynamic Categories */}

        {cats.map((category) => (

          <button
            key={category}
            onClick={() =>
              setSelected(category)
            }
            className="
              px-5
              py-2.5
              rounded-xl
              bg-white
              text-gray-600
              border
              border-gray-200
              font-medium
              hover:bg-rose-50
              hover:text-rose-500
              hover:border-rose-200
              hover:-translate-y-0.5
              transition-all
              duration-200
              whitespace-nowrap
            "
          >
            {category}
          </button>

        ))}

      </div>

    </div>
  );
}

