
import {
  ShoppingBag,
  ShieldCheck,
  Truck,
  Headphones,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function About() {
  const features = [
    {
      icon: ShoppingBag,
      title: "Quality Products",
      text: "Carefully selected products for our customers.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Shopping",
      text: "Your shopping experience is safe and secure.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      text: "Reliable delivery right to your doorstep.",
    },
    {
      icon: Headphones,
      title: "Customer Support",
      text: "Friendly support whenever you need help.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fffafa]">

{/* hero section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-pink-50">
        {/* Decorative Circles */}
        <div className="absolute -top-28 -right-28 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-28 -left-28 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-5 py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-rose-100 shadow-sm">
                <Sparkles
                  size={16}
                  className="text-rose-500"
                />
                <span className="text-sm font-bold text-rose-500">
                  ABOUT SHOSYCART
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mt-6">
                Shopping Made
                <span className="block text-rose-500">
                  Simple & Beautiful
                </span>
              </h1>
              <p className="text-gray-500 text-base md:text-lg leading-8 mt-6 max-w-xl">
                ShopsyCart is a modern e-commerce platform designed
                to provide customers with a simple, secure and
                enjoyable online shopping experience.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center">
                    <ShieldCheck
                      size={17}
                      className="text-rose-500"
                    />
                  </div>
                  Secure Shopping
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center">
                    <Truck
                      size={17}
                      className="text-rose-500"
                    />
                  </div>
                  Fast Delivery
                </div>
              </div>
            </div>
            {/* Right*/}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-rose-400 to-pink-500 rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-rose-200">
                <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8">
                  <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center shadow-lg">
                    <ShoppingBag
                      size={38}
                      className="text-rose-500"
                    />
                  </div>
                  <h2 className="text-3xl font-extrabold text-white mt-7">
                    Your Shopping
                    <br />
                    Journey Starts Here
                  </h2>
                  <p className="text-rose-50 mt-4 leading-7">
                    Discover products you love, shop with confidence,
                    and enjoy a smooth online experience.
                  </p>
                  <div className="flex items-center gap-2 text-white font-semibold mt-7">
                    Explore ShopNest
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-5 -left-4 md:-left-7 bg-white rounded-2xl shadow-xl border border-rose-100 px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center">
                    <Sparkles
                      size={19}
                      className="text-rose-500"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">
                      Shopping Experience
                    </p>
                    <p className="font-bold text-gray-800">
                      Simple & Secure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* features */}
      <section className="max-w-7xl mx-auto px-5 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-rose-500 font-bold text-sm uppercase tracking-wider">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
            Everything You Need
          </h2>
          <p className="text-gray-500 mt-3 leading-7">
            We focus on providing a reliable, convenient and
            enjoyable shopping experience for every customer.
          </p>
        </div>

{/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((item) => {
            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="
                  group
                  bg-white
                  border
                  border-rose-100
                  rounded-3xl
                  p-7
                  shadow-sm
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >

                {/* Icon */}

                <div className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-rose-50
                  flex
                  items-center
                  justify-center
                  group-hover:bg-rose-500
                  transition-all
                  duration-300
                ">

                  <Icon
                    size={25}
                    className="
                      text-rose-500
                      group-hover:text-white
                      transition
                    "
                  />

                </div>


                {/* Title */}

                <h2 className="text-lg font-bold text-gray-900 mt-6">
                  {item.title}
                </h2>


                {/* Description */}

                <p className="text-gray-500 text-sm leading-6 mt-3">
                  {item.text}
                </p>


                {/* Bottom Line */}

                <div className="
                  mt-6
                  w-10
                  h-1
                  rounded-full
                  bg-rose-200
                  group-hover:w-16
                  group-hover:bg-rose-500
                  transition-all
                  duration-300
                " />

              </div>

            );

          })}

        </div>

      </section>

<section className="max-w-7xl mx-auto px-5 pb-16">

        <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-3xl p-8 md:p-12 text-center shadow-xl shadow-rose-100">

          <div className="w-14 h-14 bg-white/20 rounded-2xl mx-auto flex items-center justify-center">

            <ShoppingBag
              size={27}
              className="text-white"
            />

          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-5">
            Your Happy Shopping Experience Matters
          </h2>

          <p className="text-rose-50 max-w-2xl mx-auto mt-3 leading-7">
            Shop with confidence and discover products that
            make your everyday life better.
          </p>

        </div>

      </section>

    </main>
  );
}

