import { useDispatch, useSelector } from "react-redux";
import { removeWishlist } from "../redux/wishlistSlice";

import { Link } from "react-router-dom";

import {
  Heart,
  Trash2,
  ShoppingCart,
  ArrowRight,
  Star,
  ShoppingBag,
  Check,
} from "lucide-react";

import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function Wishlist() {
  const items = useSelector(
    (state) => state.wishlist.items
  );

  const dispatch = useDispatch();

  const { addToCart } = useCart();

  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (product) => {
    addToCart(product);

    setAddedItems((prev) => {
      if (prev.includes(product.id)) {
        return prev;
      }

      return [...prev, product.id];
    });

    setTimeout(() => {
      setAddedItems((prev) =>
        prev.filter((id) => id !== product.id)
      );
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#fffafa]">

      {/* ================= HEADER ================= */}
      <section className="bg-gradient-to-br from-rose-50 via-white to-pink-50 border-b border-rose-100">

        <div className="max-w-7xl mx-auto px-5 py-12">

          <div className="flex items-center gap-3 text-rose-500 mb-4">

            <div className="w-11 h-11 rounded-2xl bg-rose-100 flex items-center justify-center">

              <Heart
                size={21}
                strokeWidth={2}
              />

            </div>

            <span className="font-bold text-sm tracking-wider uppercase">
              Saved Products
            </span>

          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">

            <div>

              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                My Wishlist
              </h1>

              <p className="text-gray-500 mt-3 max-w-xl">
                Keep the products you love in one place and
                add your favourites to cart whenever you're ready.
              </p>

            </div>

            {items.length > 0 && (
              <div className="inline-flex items-center gap-2 w-fit px-4 py-2.5 bg-white rounded-xl border border-rose-100 text-sm font-semibold text-gray-600 shadow-sm">

                <Heart
                  size={16}
                  className="text-rose-500"
                />

                {items.length}
                {items.length === 1
                  ? " Product"
                  : " Products"}

              </div>
            )}

          </div>

        </div>

      </section>


      {/* ================= CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-5 py-10">

        {items.length === 0 ? (

          /* EMPTY WISHLIST */

          <div className="min-h-[420px] flex items-center justify-center">

            <div className="text-center max-w-md">

              <div className="w-24 h-24 mx-auto rounded-full bg-rose-50 flex items-center justify-center">

                <Heart
                  size={42}
                  className="text-rose-300"
                  strokeWidth={1.7}
                />

              </div>

              <h2 className="text-2xl font-extrabold text-gray-900 mt-7">
                Your wishlist is empty
              </h2>

              <p className="text-gray-500 mt-3 leading-6">
                Looks like you haven't saved any products yet.
                Explore our collection and save your favourite products.
              </p>

              <Link
                to="/products"
                className="inline-flex items-center gap-2 mt-7 px-6 py-3.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-semibold shadow-lg shadow-rose-200 transition"
              >

                <ShoppingBag size={18} />

                Browse Products

                <ArrowRight size={17} />

              </Link>

            </div>

          </div>

        ) : (

          /* WISHLIST PRODUCTS */

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {items.map((item) => {

              const isAdded = addedItems.includes(item.id);

              return (

                <div
                  key={item.id}
                  className="group bg-white rounded-3xl border border-rose-100 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-rose-100/50 transition-all duration-300"
                >

                  {/* ================= IMAGE AREA ================= */}

                  <div className="relative h-56 bg-gradient-to-br from-rose-50 via-white to-pink-50 flex items-center justify-center overflow-hidden">

                    <Link
                      to={`/product/${item.id}`}
                      className="w-full h-full flex items-center justify-center p-7"
                    >

                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-40 w-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />

                    </Link>


                    {/* REMOVE BUTTON */}

                    <button
                      onClick={() =>
                        dispatch(
                          removeWishlist(item.id)
                        )
                      }
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/95 text-gray-500 hover:bg-red-50 hover:text-red-500 flex items-center justify-center shadow-md transition"
                      title="Remove from wishlist"
                    >

                      <Trash2 size={17} />

                    </button>


                    {/* WISHLIST LABEL */}

                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/95 shadow-sm flex items-center gap-1.5 text-xs font-semibold text-rose-500">

                      <Heart
                        size={13}
                      />

                      Saved

                    </div>

                  </div>


                  <div className="p-5">

                    {/* CATEGORY */}

                    <p className="text-xs uppercase tracking-wider font-semibold text-rose-400">

                      {item.category}

                    </p>


                    {/* TITLE */}

                    <Link
                      to={`/product/${item.id}`}
                    >

                      <h2 className="font-bold text-gray-800 mt-2 line-clamp-2 min-h-[48px] hover:text-rose-500 transition">

                        {item.title}

                      </h2>

                    </Link>


                    {/* RATING */}

                    <div className="flex items-center gap-1.5 mt-3">

                      <Star
                        size={15}
                        fill="currentColor"
                        className="text-amber-400"
                      />

                      <span className="text-sm font-semibold text-gray-700">

                        {item.rating?.rate || "4.5"}

                      </span>

                      <span className="text-xs text-gray-400">
                        rating
                      </span>

                    </div>


                    {/* PRICE */}

                    <div className="mt-4">

                      <p className="text-xs text-gray-400">
                        Price
                      </p>

                      <p className="text-xl font-extrabold text-rose-500">
                        ${item.price}
                      </p>

                    </div>


                    {/* ================= ACTIONS ================= */}

                    <div className="flex gap-2 mt-5">

                      {/* ADD TO CART */}

                      <button
                        onClick={() =>
                          handleAddToCart(item)
                        }
                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm transition ${
                          isAdded
                            ? "bg-green-500 text-white"
                            : "bg-rose-500 hover:bg-rose-600 text-white"
                        }`}
                      >

                        {isAdded ? (
                          <>
                            <Check size={17} />
                            Added
                          </>
                        ) : (
                          <>
                            <ShoppingCart size={17} />
                            Add to Cart
                          </>
                        )}

                      </button>


                      {/* VIEW PRODUCT */}

                      <Link
                        to={`/product/${item.id}`}
                        className="w-12 h-12 rounded-xl bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white flex items-center justify-center transition"
                        title="View product"
                      >

                        <ArrowRight size={18} />

                      </Link>

                    </div>

                  </div>

                </div>

              );
            })}

          </div>

        )}

      </section>

    </main>
  );
}
