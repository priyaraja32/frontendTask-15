import { Link, useNavigate } from "react-router-dom";

import {
  ShoppingCart,
  Moon,
  Sun,
  Heart,
  User,
  LogOut,
  Store,
} from "lucide-react";

import { useCart } from "../context/CartContext";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Navbar() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const wishlist = useSelector(
    (state) => state.wishlist.items
  );

  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      dark
    );

    localStorage.setItem(
      "theme",
      dark ? "dark" : "light"
    );
  }, [dark]);

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-[#171116]/90 backdrop-blur-xl border-b border-rose-100 dark:border-white/10 shadow-sm">

      <div className="max-w-7xl mx-auto px-5">

        <div className="h-[76px] flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >

            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center shadow-lg shadow-rose-200 dark:shadow-none group-hover:scale-105 transition-transform">

              <Store
                size={22}
                className="text-white"
              />

            </div>

            <div>
              <h1 className="text-xl font-extrabold tracking-tight text-gray-900 dark:text-white">

                Shopsy
                <span className="text-rose-500">
                  Cart
                </span>

              </h1>

              <p className="text-[9px] font-semibold tracking-[0.2em] text-gray-400">
                SMART SHOPPING
              </p>
            </div>

          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-7">

            <Link
              to="/"
              className="text-sm font-medium text-gray-600 hover:text-rose-500 dark:text-gray-300 dark:hover:text-rose-400 transition"
            >
              Home
            </Link>

            <Link
              to="/products"
              className="text-sm font-medium text-gray-600 hover:text-rose-500 dark:text-gray-300 dark:hover:text-rose-400 transition"
            >
              Products
            </Link>

            <Link
              to="/orders"
              className="text-sm font-medium text-gray-600 hover:text-rose-500 dark:text-gray-300 dark:hover:text-rose-400 transition"
            >
              Orders
            </Link>

            <Link
              to="/about"
              className="text-sm font-medium text-gray-600 hover:text-rose-500 dark:text-gray-300 dark:hover:text-rose-400 transition"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-sm font-medium text-gray-600 hover:text-rose-500 dark:text-gray-300 dark:hover:text-rose-400 transition"
            >
              Contact
            </Link>

          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="relative w-10 h-10 rounded-xl flex items-center justify-center text-gray-600 hover:text-rose-500 hover:bg-rose-50 dark:text-gray-300 dark:hover:bg-white/10 transition"
            >

              <Heart size={19} />

              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[19px] h-[19px] px-1 flex items-center justify-center rounded-full bg-rose-500 text-white text-[10px] font-bold">
                  {wishlist.length}
                </span>
              )}

            </Link>

            {/* Theme */}
            <button
              onClick={() => setDark(!dark)}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-600 hover:text-rose-500 hover:bg-rose-50 dark:text-gray-300 dark:hover:bg-white/10 transition"
            >

              {dark ? (
                <Sun size={19} />
              ) : (
                <Moon size={19} />
              )}

            </button>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative w-10 h-10 rounded-xl flex items-center justify-center text-gray-600 hover:text-rose-500 hover:bg-rose-50 dark:text-gray-300 dark:hover:bg-white/10 transition"
            >

              <ShoppingCart size={19} />

              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[19px] h-[19px] px-1 flex items-center justify-center rounded-full bg-rose-500 text-white text-[10px] font-bold">
                  {cart.length}
                </span>
              )}

            </Link>

            {/* Profile */}
            <Link
              to="/profile"
              className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-600 hover:text-rose-500 hover:bg-rose-50 dark:text-gray-300 dark:hover:bg-white/10 transition"
            >
              <User size={19} />
            </Link>

            {/* Logout */}
            <button
              onClick={logout}
              className="hidden sm:flex w-10 h-10 rounded-xl items-center justify-center text-gray-500 hover:text-red-500 hover:bg-red-50 dark:text-gray-300 dark:hover:bg-white/10 transition"
              title="Logout"
            >
              <LogOut size={19} />
            </button>

          </div>

        </div>

      </div>

    </header>
  );
}