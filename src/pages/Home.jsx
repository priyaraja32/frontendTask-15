import {
  Sparkles,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Truck,
  Headphones,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffafa]">

      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-pink-50">

        {/* Decorative Background */}

        <div className="absolute -top-20 -right-20 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl" />

        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 py-16 md:py-24">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              {/* Badge */}

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-rose-100 shadow-sm">

                <Sparkles
                  size={16}
                  className="text-rose-500"
                />

                <span className="text-sm font-semibold text-rose-500">
                  Smart Shopping Experience
                </span>

              </div>


              {/* Heading */}

              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mt-6">

                Find Something

                <span className="block text-rose-500">
                  You’ll Love.
                </span>

              </h1>


              {/* Description */}

              <p className="text-gray-500 text-lg leading-8 mt-5 max-w-xl">

                Explore quality products, discover your
                favourites and enjoy a simple, secure and
                beautiful shopping experience with ShopNest.

              </p>


              {/* Buttons */}

              <div className="flex flex-wrap gap-4 mt-8">

                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-semibold shadow-lg shadow-rose-200 transition"
                >

                  <ShoppingBag size={18} />

                  Shop Now

                  <ArrowRight size={17} />

                </Link>


                <Link
                  to="/about"
                  className="inline-flex items-center px-6 py-3.5 rounded-xl bg-white border border-rose-100 text-gray-700 font-semibold hover:border-rose-300 hover:text-rose-500 transition"
                >

                  Learn More

                </Link>

              </div>

            </div>

            <div className="hidden lg:flex justify-center">

              <div className="relative">

                {/* Main Circle */}

                <div className="w-[430px] h-[430px] rounded-full bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center">

                  <div className="w-[330px] h-[330px] rounded-full bg-white shadow-2xl flex items-center justify-center">

                    <ShoppingBag
                      size={130}
                      strokeWidth={1.2}
                      className="text-rose-400"
                    />

                  </div>

                </div>


                {/* Top Card */}

                <div className="absolute top-10 right-0 bg-white px-5 py-3 rounded-2xl shadow-lg">

                  <p className="text-xs text-gray-400">
                    Shopping
                  </p>

                  <p className="font-bold text-gray-800">
                    Made Simple
                  </p>

                </div>


                {/* Bottom Card */}

                <div className="absolute bottom-12 left-0 bg-white px-5 py-3 rounded-2xl shadow-lg">

                  <p className="text-xs text-gray-400">
                    Discover
                  </p>

                  <p className="font-bold text-rose-500">
                    Your Favorites
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-5 py-12">

        <div className="grid md:grid-cols-3 gap-6">

          {/* Fast Delivery */}

          <div className="bg-white rounded-3xl border border-rose-100 p-6 flex items-center gap-5 shadow-sm hover:shadow-lg hover:shadow-rose-100/50 transition">

            <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center shrink-0">

              <Truck
                className="text-rose-500"
                size={22}
              />

            </div>

            <div>

              <h3 className="font-bold text-gray-800">
                Fast Delivery
              </h3>

              <p className="text-sm text-gray-400 mt-1">
                Quick & reliable delivery
              </p>

            </div>

          </div>


          {/* Secure Shopping */}

          <div className="bg-white rounded-3xl border border-rose-100 p-6 flex items-center gap-5 shadow-sm hover:shadow-lg hover:shadow-rose-100/50 transition">

            <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center shrink-0">

              <ShieldCheck
                className="text-rose-500"
                size={22}
              />

            </div>

            <div>

              <h3 className="font-bold text-gray-800">
                Secure Shopping
              </h3>

              <p className="text-sm text-gray-400 mt-1">
                Safe & trusted experience
              </p>

            </div>

          </div>


          {/* Customer Support */}

          <div className="bg-white rounded-3xl border border-rose-100 p-6 flex items-center gap-5 shadow-sm hover:shadow-lg hover:shadow-rose-100/50 transition">

            <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center shrink-0">

              <Headphones
                className="text-rose-500"
                size={22}
              />

            </div>

            <div>

              <h3 className="font-bold text-gray-800">
                Customer Support
              </h3>

              <p className="text-sm text-gray-400 mt-1">
                We're here whenever you need
              </p>

            </div>

          </div>

        </div>

      </section>


      <section className="max-w-7xl mx-auto px-5 pb-16">

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-rose-500 to-pink-500 px-8 py-12 md:px-12">

          {/* Decorative */}

          <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-white/10" />

          <div className="absolute -left-10 -bottom-20 w-48 h-48 rounded-full bg-white/10" />


          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-7">

            <div className="text-white">

              <p className="text-sm font-semibold text-rose-100 uppercase tracking-wider">
                Ready to shop?
              </p>

              <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
                Discover Your Next Favourite
              </h2>

              <p className="text-rose-100 mt-3 max-w-xl">
                Browse our complete collection and find
                products that fit your style and needs.
              </p>

            </div>


            <Link
              to="/products"
              className="shrink-0 inline-flex items-center justify-center gap-2 bg-white text-rose-500 hover:bg-rose-50 px-6 py-3.5 rounded-xl font-bold transition shadow-lg"
            >

              <ShoppingBag size={18} />

              Explore Products

              <ArrowRight size={17} />

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
