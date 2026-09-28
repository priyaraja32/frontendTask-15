import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import CategoryProducts from "./pages/CategoryProducts";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import Orders from "./pages/Orders";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>

      {/* Public Pages */}
      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      {/* Protected Application */}
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <div className="min-h-screen bg-[#fff8fa] dark:bg-[#171116] transition-colors duration-300">

              <Navbar />

              <Routes>

                <Route
                  path="/"
                  element={<Home />}
                />

                <Route
                  path="/products"
                  element={<Products />}
                />

                {/* Nested Category Route */}
                <Route
                  path="/products/category/:category"
                  element={<CategoryProducts />}
                />

                <Route
                  path="/product/:id"
                  element={<ProductDetails />}
                />

                <Route
                  path="/cart"
                  element={<Cart />}
                />

                <Route
                  path="/checkout"
                  element={<Checkout />}
                />

                <Route
                  path="/success"
                  element={<Success />}
                />

                <Route
                  path="/orders"
                  element={<Orders />}
                />

                <Route
                  path="/wishlist"
                  element={<Wishlist />}
                />

                <Route
                  path="/profile"
                  element={<Profile />}
                />

                <Route
                  path="/about"
                  element={<About />}
                />

                <Route
                  path="/contact"
                  element={<Contact />}
                />

                <Route
                  path="/admin"
                  element={<Admin />}
                />

                <Route
                  path="*"
                  element={<NotFound />}
                />

              </Routes>

              <Footer />

            </div>
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}