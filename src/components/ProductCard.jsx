import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Heart,
  Star,
} from "lucide-react";

import { useCart } from "../context/CartContext";

import { useDispatch, useSelector } from "react-redux";
import {
  addWishlist,
  removeWishlist,
} from "../redux/wishlistSlice";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const dispatch = useDispatch();

  const wishlist = useSelector(
    (state) => state.wishlist.items
  );

  const isWishlisted = wishlist.some(
    (item) => item.id === product.id
  );

  const handleWishlist = () => {
    if (isWishlisted) {
      dispatch(removeWishlist(product.id));
    } else {
      dispatch(addWishlist(product));
    }
  };

  return (
    <div className="group bg-white rounded-3xl border border-rose-100 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-rose-100/60 transition-all duration-300">

      {/* Image Section */}
      <div className="relative h-60 bg-gradient-to-br from-rose-50 via-white to-pink-50 flex items-center justify-center overflow-hidden">

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={handleWishlist}
          className={`absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${
            isWishlisted
              ? "bg-rose-500 text-white shadow-rose-200"
              : "bg-white text-gray-500 hover:text-rose-500 hover:bg-rose-50"
          }`}
        >
          <Heart
            size={19}
            fill={isWishlisted ? "currentColor" : "none"}
          />
        </button>

        {/* Product Image */}
        <Link
          to={`/product/${product.id}`}
          className="w-full h-full flex items-center justify-center p-7"
        >
          <img
            src={product.image}
            alt={product.title}
            className="h-44 w-full object-contain group-hover:scale-110 transition-transform duration-500"
          />
        </Link>

      </div>

      {/* Product Content */}
      <div className="p-5">

        {/* Category */}
        <p className="text-xs font-semibold uppercase tracking-wider text-rose-400 mb-2">
          {product.category}
        </p>

        {/* Title */}
        <Link to={`/product/${product.id}`}>
          <h2 className="text-base font-bold text-gray-800 line-clamp-2 min-h-[48px] hover:text-rose-500 transition">
            {product.title}
          </h2>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-3">

          <Star
            size={15}
            fill="currentColor"
            className="text-amber-400"
          />

          <span className="text-sm font-semibold text-gray-700">
            {product.rating?.rate || "4.5"}
          </span>

          <span className="text-xs text-gray-400">
            ({product.rating?.count || "100"} reviews)
          </span>

        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between mt-5">

          <div>
            <p className="text-xs text-gray-400">
              Price
            </p>

            <p className="text-xl font-extrabold text-rose-500">
              ${product.price}
            </p>
          </div>

          {/* Cart Button */}
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="w-11 h-11 rounded-xl bg-rose-500 hover:bg-rose-600 text-white flex items-center justify-center shadow-md shadow-rose-200 hover:scale-105 transition-all"
            title="Add to cart"
          >
            <ShoppingCart size={18} />
          </button>

        </div>

      </div>
    </div>
  );
}