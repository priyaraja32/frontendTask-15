import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShoppingBag,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    if (!email.includes("@")) {
      setError("Enter a valid email address");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify({
        email,
      })
    );

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#fff7f9] flex items-center justify-center p-4 md:p-8 relative overflow-hidden">

      {/* Background Decorations */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-rose-200/50 rounded-full blur-3xl" />

      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-200/50 rounded-full blur-3xl" />

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-6xl min-h-[650px] bg-white rounded-[32px] shadow-[0_25px_80px_rgba(244,63,94,0.12)] overflow-hidden grid lg:grid-cols-2 border border-rose-100">

        {/* Left Image Section */}
        <div className="hidden lg:block relative overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85"
            alt="Shopping"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-900/85 via-rose-700/55 to-pink-500/30" />

          <div className="relative z-10 h-full p-12 flex flex-col justify-between text-white">

            {/* Logo */}
            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                <ShoppingBag size={24} />
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  Shop<span className="text-rose-200">Nest</span>
                </h2>

                <p className="text-[9px] tracking-[0.25em] text-rose-100">
                  SMART SHOPPING
                </p>
              </div>

            </div>

            {/* Content */}
            <div className="max-w-md">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm mb-6">

                <Sparkles size={15} />

                Your shopping journey starts here

              </div>

              <h1 className="text-5xl font-extrabold leading-tight">
                Shop smarter.
                <br />
                <span className="text-rose-200">
                  Live better.
                </span>
              </h1>

              <p className="mt-6 text-rose-50/90 leading-7">
                Discover products you love, save your favorites,
                and enjoy a simple and beautiful shopping experience
                with ShopNest.
              </p>

            </div>

            {/* Bottom */}
            <div className="flex items-center gap-3 text-sm text-rose-100">
              <div className="w-8 h-[1px] bg-rose-200/60" />
              Trusted shopping experience
            </div>

          </div>
        </div>

        {/* Right Login Form */}
        <div className="flex items-center">

          <div className="w-full px-7 py-10 sm:px-12 lg:px-14">

            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center gap-3 mb-10">

              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center shadow-lg shadow-rose-200">
                <ShoppingBag
                  size={22}
                  className="text-white"
                />
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Shop<span className="text-rose-500">Nest</span>
                </h2>

                <p className="text-[9px] tracking-[0.2em] text-gray-400">
                  SMART SHOPPING
                </p>
              </div>

            </div>

            {/* Heading */}
            <div>

              <p className="text-sm font-semibold text-rose-500 mb-2">
                Welcome back 👋
              </p>

              <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                Sign in
              </h2>

              <p className="text-gray-500 mt-3">
                Login to continue your shopping journey.
              </p>

            </div>

            {/* Error */}
            {error && (
              <div className="mt-6 flex items-center gap-3 bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-xl text-sm">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                {error}
              </div>
            )}

            {/* Form */}
            <form
              onSubmit={handleLogin}
              className="mt-8 space-y-5"
            >

              {/* Email */}
              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>

                <div className="relative">

                  <Mail
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    placeholder="you@example.com"
                    className="w-full h-14 pl-12 pr-4 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 outline-none focus:bg-white focus:border-rose-400 focus:ring-4 focus:ring-rose-100 transition"
                  />

                </div>

              </div>

              {/* Password */}
              <div>

                <div className="flex items-center justify-between mb-2">

                  <label className="text-sm font-semibold text-gray-700">
                    Password
                  </label>

                  <span className="text-xs text-gray-400">
                    Secure login
                  </span>

                </div>

                <div className="relative">

                  <Lock
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    placeholder="Enter your password"
                    className="w-full h-14 pl-12 pr-12 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 outline-none focus:bg-white focus:border-rose-400 focus:ring-4 focus:ring-rose-100 transition"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-rose-500 transition"
                  >
                    {showPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>

                </div>

              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="group w-full h-14 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white rounded-2xl font-bold shadow-lg shadow-rose-200 hover:shadow-rose-300 transition-all flex items-center justify-center gap-2"
              >

                Sign In

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />

              </button>

            </form>

            {/* Register */}
            <div className="mt-8 text-center">

              <p className="text-sm text-gray-500">
                Don't have an account?{" "}

                <Link
                  to="/register"
                  className="font-bold text-rose-500 hover:text-rose-600 transition"
                >
                  Create Account
                </Link>

              </p>

            </div>

            {/* Bottom */}
            <p className="text-center text-xs text-gray-400 mt-10">
              © 2026 ShopNest. Your smart shopping destination.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}