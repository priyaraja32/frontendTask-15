import { useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  showPassword: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {

    case "FIELD":
      return {
        ...state,
        [action.field]: action.value,
        error: "",
      };

    case "TOGGLE_PASSWORD":
      return {
        ...state,
        showPassword: !state.showPassword,
      };

    case "ERROR":
      return {
        ...state,
        error: action.value,
      };

    default:
      return state;
  }
}

export default function Register() {

  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !state.name ||
      !state.email ||
      !state.password ||
      !state.confirmPassword
    ) {
      dispatch({
        type: "ERROR",
        value: "All fields are required",
      });
      return;
    }

    if (!state.email.includes("@")) {
      dispatch({
        type: "ERROR",
        value: "Enter a valid email",
      });
      return;
    }

    if (state.password.length < 6) {
      dispatch({
        type: "ERROR",
        value:
          "Password must contain at least 6 characters",
      });
      return;
    }

    if (state.password !== state.confirmPassword) {
      dispatch({
        type: "ERROR",
        value: "Passwords do not match",
      });
      return;
    }

    localStorage.setItem(
      "registeredUser",
      JSON.stringify({
        name: state.name,
        email: state.email,
      })
    );

    navigate("/login");
  };

  return (

    <div className="min-h-screen bg-[#fff7f9] flex items-center justify-center p-4 md:p-8 relative overflow-hidden">

      {/* Background Decorations */}
      <div className="absolute -top-40 -right-32 w-96 h-96 bg-pink-200/50 rounded-full blur-3xl" />

      <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-rose-200/50 rounded-full blur-3xl" />

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-6xl min-h-[680px] bg-white rounded-[32px] overflow-hidden shadow-[0_25px_80px_rgba(244,63,94,0.12)] grid lg:grid-cols-2 border border-rose-100">

        {/* Left Content */}
        <div className="hidden lg:flex relative overflow-hidden bg-gradient-to-br from-rose-500 via-pink-500 to-rose-400">

          {/* Decorative Circles */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10" />

          <div className="absolute bottom-[-120px] -left-20 w-96 h-96 rounded-full bg-white/10" />

          <div className="relative z-10 p-12 text-white flex flex-col justify-between w-full">

            {/* Logo */}
            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center">
                <ShoppingBag size={24} />
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  Shop<span className="text-rose-100">Nest</span>
                </h2>

                <p className="text-[9px] tracking-[0.25em] text-rose-100">
                  SMART SHOPPING
                </p>
              </div>

            </div>

            {/* Main Content */}
            <div className="max-w-md">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm mb-6">

                <Sparkles size={15} />

                Join our shopping community

              </div>

              <h1 className="text-5xl font-extrabold leading-tight">
                Your favorites.
                <br />

                <span className="text-rose-100">
                  One account.
                </span>
              </h1>

              <p className="mt-6 text-rose-50/90 leading-7">
                Create your ShopNest account and enjoy
                personalized shopping, saved favorites,
                orders, and a smoother shopping experience.
              </p>

              {/* Benefits */}
              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">

                  <CheckCircle2 size={20} />

                  <span className="text-sm">
                    Save your favorite products
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <CheckCircle2 size={20} />

                  <span className="text-sm">
                    Track your orders easily
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <CheckCircle2 size={20} />

                  <span className="text-sm">
                    Enjoy a personalized experience
                  </span>

                </div>

              </div>

            </div>

            <p className="text-sm text-rose-100">
              Start your shopping journey today.
            </p>

          </div>

        </div>

        {/* Register Form */}
        <div className="flex items-center">

          <div className="w-full px-7 py-9 sm:px-12 lg:px-14">

            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center gap-3 mb-8">

              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center shadow-lg shadow-rose-200">

                <ShoppingBag
                  size={22}
                  className="text-white"
                />

              </div>

              <div>

                <h2 className="text-xl font-bold text-gray-900">
                  Shopsy<span className="text-rose-500">Cart</span>
                </h2>

                <p className="text-[9px] tracking-[0.2em] text-gray-400">
                  SMART SHOPPING
                </p>

              </div>

            </div>

            {/* Heading */}
            <div>

              <p className="text-sm font-semibold text-rose-500 mb-2">
                Get started...
              </p>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                Create Account
              </h1>

              <p className="text-gray-500 mt-3">
                Create your account and start shopping.
              </p>

            </div>

            {/* Error */}
            {state.error && (

              <div className="mt-6 flex items-center gap-3 bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-xl text-sm">

                <span className="w-2 h-2 rounded-full bg-red-500" />

                {state.error}

              </div>

            )}

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-4 mt-7"
            >

              {/* Name */}
              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>

                <div className="relative">

                  <User
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    value={state.name}
                    onChange={(e) =>
                      dispatch({
                        type: "FIELD",
                        field: "name",
                        value: e.target.value,
                      })
                    }
                    placeholder="Enter your full name"
                    className="w-full h-13 pl-12 pr-4 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 outline-none focus:bg-white focus:border-rose-400 focus:ring-4 focus:ring-rose-100 transition"
                  />

                </div>

              </div>

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
                    value={state.email}
                    onChange={(e) =>
                      dispatch({
                        type: "FIELD",
                        field: "email",
                        value: e.target.value,
                      })
                    }
                    placeholder="you@example.com"
                    className="w-full h-13 pl-12 pr-4 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 outline-none focus:bg-white focus:border-rose-400 focus:ring-4 focus:ring-rose-100 transition"
                  />

                </div>

              </div>

              {/* Password */}
              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>

                <div className="relative">

                  <Lock
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type={
                      state.showPassword
                        ? "text"
                        : "password"
                    }
                    value={state.password}
                    onChange={(e) =>
                      dispatch({
                        type: "FIELD",
                        field: "password",
                        value: e.target.value,
                      })
                    }
                    placeholder="Minimum 6 characters"
                    className="w-full h-13 pl-12 pr-12 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 outline-none focus:bg-white focus:border-rose-400 focus:ring-4 focus:ring-rose-100 transition"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      dispatch({
                        type: "TOGGLE_PASSWORD",
                      })
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-rose-500 transition"
                  >
                    {state.showPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>

                </div>

              </div>

              {/* Confirm Password */}
              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Confirm Password
                </label>

                <div className="relative">

                  <Lock
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="password"
                    value={state.confirmPassword}
                    onChange={(e) =>
                      dispatch({
                        type: "FIELD",
                        field: "confirmPassword",
                        value: e.target.value,
                      })
                    }
                    placeholder="Re-enter your password"
                    className="w-full h-13 pl-12 pr-4 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 outline-none focus:bg-white focus:border-rose-400 focus:ring-4 focus:ring-rose-100 transition"
                  />

                </div>

              </div>

              {/* Button */}
              <button
                type="submit"
                className="group w-full h-14 mt-2 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white rounded-2xl font-bold shadow-lg shadow-rose-200 hover:shadow-rose-300 transition-all flex items-center justify-center gap-2"
              >

                Create Account

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />

              </button>

            </form>

            {/* Login */}
            <p className="text-center text-sm text-gray-500 mt-7">

              Already have an account?{" "}

              <Link
                to="/login"
                className="font-bold text-rose-500 hover:text-rose-600 transition"
              >
                Login
              </Link>

            </p>

            <p className="text-center text-xs text-gray-400 mt-8">
              @ 2026 ShopNest. Your smart shopping destination.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}