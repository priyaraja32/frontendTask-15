import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Twitter,
  Store,
  ArrowUpRight,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-rose-50 border-t border-rose-100">

      <div className="max-w-7xl mx-auto px-5 py-14">

        <div
          className=" grid sm:grid-cols-2 lg:grid-cols-4 gap-10" >
          <div className="lg:pr-8">
            <Link to="/" className="inline-flex items-center gap-3">

              <div
                className="
                  w-11
                  h-11
                  rounded-2xl
                  bg-rose-500
                  flex
                  items-center
                  justify-center
                  shadow-lg
                  shadow-rose-100
                "
              >
                <Store
                  size={21}
                  className="text-white"
                />
              </div>

              <h2 className="text-2xl font-extrabold text-gray-900">
                Shop<span className="text-rose-500">Nest</span>
              </h2>

            </Link>


            <p
              className="
                mt-5
                text-sm
                text-gray-500
                leading-7
                max-w-xs
              "
            >
              A modern e-commerce application built with
              React, designed to make online shopping
              simple, smooth and enjoyable.
            </p>


            <div
              className="
                flex
                items-center
                gap-2
                mt-5
                text-sm
                text-gray-500
              "
            >

              <Mail
                size={16}
                className="text-rose-500"
              />

              support@shopnest.com

            </div>

          </div>
{/* links */}
<div>
    <h3 className=" text-gray-900 font-bold text-base" > Quick Links </h3>
    <div className="space-y-3 mt-5">
        <Link to="/" className=" flex items-center justify-between text-sm text-gray-500 hover:text-rose-500 transition max-w-[140px] ">
                Home
                <ArrowUpRight size={14} />
              </Link>


              <Link
                to="/products"
                className="
                  flex
                  items-center
                  justify-between
                  text-sm
                  text-gray-500
                  hover:text-rose-500
                  transition
                  max-w-[140px]
                "
              >
                Products
                <ArrowUpRight size={14} />
              </Link>


              <Link
                to="/orders"
                className="
                  flex
                  items-center
                  justify-between
                  text-sm
                  text-gray-500
                  hover:text-rose-500
                  transition
                  max-w-[140px]
                "
              >
                Orders
                <ArrowUpRight size={14} />
              </Link>


              <Link
                to="/wishlist"
                className="
                  flex
                  items-center
                  justify-between
                  text-sm
                  text-gray-500
                  hover:text-rose-500
                  transition
                  max-w-[140px]
                "
              >
                Wishlist
                <ArrowUpRight size={14} />
              </Link>

            </div>

          </div>

{/* company */}
          <div>

            <h3
              className="
                text-gray-900
                font-bold
                text-base
              "
            >
              Company
            </h3>

            <div className="space-y-3 mt-5">

              <Link
                to="/about"
                className="
                  flex
                  items-center
                  justify-between
                  text-sm
                  text-gray-500
                  hover:text-rose-500
                  transition
                  max-w-[140px]
                "
              >
                About Us
                <ArrowUpRight size={14} />
              </Link>


              <Link
                to="/contact"
                className="
                  flex
                  items-center
                  justify-between
                  text-sm
                  text-gray-500
                  hover:text-rose-500
                  transition
                  max-w-[140px]
                "
              >
                Contact
                <ArrowUpRight size={14} />
              </Link>


              <Link
                to="/profile"
                className="
                  flex
                  items-center
                  justify-between
                  text-sm
                  text-gray-500
                  hover:text-rose-500
                  transition
                  max-w-[140px]
                "
              >
                Profile
                <ArrowUpRight size={14} />
              </Link>

            </div>

          </div>


{/* social media links */}

          <div>

            <h3
              className="
                text-gray-900
                font-bold
                text-base
              "
            >
              Follow Us
            </h3>


            <p
              className="
                text-sm
                text-gray-500
                mt-3
                leading-6
              "
            >
              Follow ShopNest for updates,
              offers and new products.
            </p>


            <div className="flex gap-3 mt-5">

              {/* Instagram */}

              <a
                href="#"
                className="
                  w-11
                  h-11
                  rounded-xl
                  bg-white
                  border
                  border-rose-100
                  flex
                  items-center
                  justify-center
                  text-gray-500
                  hover:bg-rose-500
                  hover:text-white
                  hover:border-rose-500
                  hover:-translate-y-1
                  transition-all
                  shadow-sm
                "
              >
                <Instagram size={19} />
              </a>


              {/* Facebook */}

              <a
                href="#"
                className="
                  w-11
                  h-11
                  rounded-xl
                  bg-white
                  border
                  border-rose-100
                  flex
                  items-center
                  justify-center
                  text-gray-500
                  hover:bg-rose-500
                  hover:text-white
                  hover:border-rose-500
                  hover:-translate-y-1
                  transition-all
                  shadow-sm
                "
              >
                <Facebook size={19} />
              </a>


              {/* Twitter */}

              <a
                href="#"
                className="
                  w-11
                  h-11
                  rounded-xl
                  bg-white
                  border
                  border-rose-100
                  flex
                  items-center
                  justify-center
                  text-gray-500
                  hover:bg-rose-500
                  hover:text-white
                  hover:border-rose-500
                  hover:-translate-y-1
                  transition-all
                  shadow-sm
                "
              >
                <Twitter size={19} />
              </a>

            </div>

          </div>

        </div>

{/* footer bottom */}

        <div
          className="
            border-t
            border-rose-100
            mt-12
            pt-6
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-3
          "
        >

          <p
            className="
              text-sm
              text-gray-500
            "
          >
            @2026 ShopNest. All rights reserved.
          </p>


          <p
            className="
              text-sm
              text-gray-400
            "
          >
            Built with
            <span className="text-rose-500 font-semibold mx-1">
              React
            </span>
            for a better shopping experience.
          </p>

        </div>

      </div>

    </footer>
  );
}