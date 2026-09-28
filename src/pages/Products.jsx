
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

import useFetch from "../hooks/useFetch";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";
import CategoryFilter from "../components/CategoryFilter";

export default function Products() {
  const { data, loading, error } =
    useFetch(
      "https://fakestoreapi.com/products"
    );

  const [searchParams, setSearchParams] =
    useSearchParams();

  const page =
    Number(searchParams.get("page")) || 1;

  const [search, setSearch] = useState("");
  const [selected, setSelected] =
    useState("all");

  const filtered = data.filter((product) => {
    const matchesSearch =
      product.title
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      selected === "all" ||
      product.category === selected;

    return (
      matchesSearch &&
      matchesCategory
    );
  });

  const perPage = 8;

  const start = (page - 1) * perPage;

  const products = filtered.slice(
    start,
    start + perPage
  );

  const categories = [
    ...new Set(
      data.map((item) => item.category)
    ),
  ];

  const nextPage = () => {
    setSearchParams({
      page: page + 1,
    });
  };

  const previousPage = () => {
    if (page > 1) {
      setSearchParams({
        page: page - 1,
      });
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fffafa]">
        <div className="text-center">

          <h2 className="text-xl font-bold text-red-500">
            Something went wrong
          </h2>

          <p className="mt-2 text-gray-500">
            {error}
          </p>

        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#fffafa]">

      {/* ================= HEADER ================= */}

      <section className="max-w-7xl mx-auto px-5 pt-10">

        <div className="mb-8">

          <p className="text-rose-500 font-bold text-sm uppercase tracking-wider">
            Our Collection
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">
            Explore Products
          </h1>

          <p className="text-gray-500 mt-3 text-base">
            Find the best products for your needs.
          </p>

        </div>


        {/* ================= SEARCH ================= */}

        <div className="max-w-3xl">

          <SearchBar
            setSearch={setSearch}
          />

        </div>


        {/* ================= CATEGORY ================= */}

        <div className="mt-8 mb-12">

          <CategoryFilter
            cats={categories}
            setSelected={setSelected}
          />

        </div>

      </section>


      {/* ================= PRODUCT SECTION ================= */}

      <section className="max-w-7xl mx-auto px-5">

        {products.length === 0 ? (

          <div className="bg-white border border-rose-100 rounded-3xl py-20 text-center shadow-sm">

            <h2 className="text-xl font-bold text-gray-800">
              No products found
            </h2>

            <p className="text-gray-500 mt-2">
              Try another search or category.
            </p>

          </div>

        ) : (

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">

            {products.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))}

          </div>

        )}

      </section>


      {/* ================= PAGINATION ================= */}

      <section className="max-w-7xl mx-auto px-5 py-12">

        <div className="flex justify-center items-center gap-3">

          {/* Previous */}

          <button
            onClick={previousPage}
            disabled={page === 1}
            className="
              px-5
              py-2.5
              rounded-xl
              bg-white
              border
              border-gray-200
              text-gray-700
              font-semibold
              hover:border-rose-300
              hover:text-rose-500
              hover:bg-rose-50
              transition-all
              disabled:opacity-40
              disabled:cursor-not-allowed
            "
          >
            Previous
          </button>


          {/* Current Page */}

          <span
            className="
              px-5
              py-2.5
              rounded-xl
              bg-rose-500
              text-white
              font-semibold
              shadow-md
              shadow-rose-200
            "
          >
            Page {page}
          </span>


          {/* Next */}

          <button
            onClick={nextPage}
            disabled={
              start + perPage >=
              filtered.length
            }
            className="
              px-5
              py-2.5
              rounded-xl
              bg-rose-500
              text-white
              font-semibold
              hover:bg-rose-600
              transition-all
              shadow-md
              shadow-rose-100
              disabled:opacity-40
              disabled:cursor-not-allowed
            "
          >
            Next
          </button>

        </div>

      </section>

    </main>
  );
}

