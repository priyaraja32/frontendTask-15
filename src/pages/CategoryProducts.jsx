import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

export default function CategoryProducts() {
  const { category } = useParams();

  const {
    data,
    loading,
    error,
  } = useFetch("https://fakestoreapi.com/products");

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-red-500 font-medium">
          {error}
        </p>
      </div>
    );
  }

  const products = data.filter(
    (product) => product.category === category
  );

  return (
    <main className="max-w-7xl mx-auto px-5 py-10">

      <div className="mb-8">
        <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
          Product Category
        </p>

        <h1 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900 dark:text-white capitalize">
          {category}
        </h1>

        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Explore products from this category.
        </p>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            No products found
          </h2>

          <p className="text-gray-500 mt-2">
            There are no products in this category.
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}

    </main>
  );
}