import { useCart } from "../context/CartContext";
import {
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  Package,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Cart() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

 

  if (!cart.length) {
    return (
      <main className="min-h-screen bg-[#fffafa]">

        <section className="bg-gradient-to-br from-rose-50 via-white to-pink-50">
          <div className="max-w-6xl mx-auto px-5 py-12">

            <p className="text-rose-500 text-sm font-bold uppercase tracking-wider">
              SHOPPING CART
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
              Your Cart
            </h1>

            <p className="text-gray-500 mt-3">
              Review your selected products before checkout.
            </p>

          </div>
        </section>

        <div className="max-w-5xl mx-auto px-5 py-20">

          <div className="
            bg-white
            border
            border-rose-100
            rounded-3xl
            p-10
            md:p-16
            text-center
            shadow-sm
          ">

            <div className="
              w-20
              h-20
              mx-auto
              rounded-3xl
              bg-rose-50
              flex
              items-center
              justify-center
            ">
              <ShoppingBag
                size={36}
                className="text-rose-500"
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-6">
              Your Cart is Empty
            </h2>

            <p className="text-gray-500 mt-2">
              Looks like you haven't added anything to your cart yet.
            </p>

            <Link
              to="/products"
              className="
                inline-flex
                items-center
                gap-2
                mt-7
                px-6
                py-3
                rounded-xl
                bg-rose-500
                hover:bg-rose-600
                text-white
                font-semibold
                transition
                shadow-lg
                shadow-rose-100
              "
            >
              <ShoppingBag size={18} />
              Browse Products
            </Link>

          </div>

        </div>
      </main>
    );
  }

// empty cart

  return (
    <main className="min-h-screen bg-[#fffafa]">
      <section className="bg-gradient-to-br from-rose-50 via-white to-pink-50">
        <div className="max-w-6xl mx-auto px-5 py-12">
          <p className="text-rose-500 text-sm font-bold uppercase tracking-wider">
            SHOPPING CART
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
            Your Cart
          </h1>
          <p className="text-gray-500 mt-3">
            {cart.length} {cart.length === 1 ? "item" : "items"} in your cart
          </p>
        </div>
      </section>
     
{/* content */}
      <section className="max-w-6xl mx-auto px-5 py-10">
        <div className="grid lg:grid-cols-[1fr_360px] gap-8">

{/* products */}
          <div className="space-y-5">

            {cart.map((item) => (

              <div
                key={item.id}
                className="
                  bg-white
                  border
                  border-rose-100
                  rounded-3xl
                  p-5
                  shadow-sm
                  hover:shadow-md
                  transition
                "
              >

                <div className="
                  flex
                  flex-col
                  sm:flex-row
                  sm:items-center
                  gap-5
                ">

                  {/* IMAGE */}

                  <div className="
                    w-full
                    sm:w-28
                    h-28
                    shrink-0
                    rounded-2xl
                    bg-rose-50
                    flex
                    items-center
                    justify-center
                    p-4
                  ">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                        w-full
                        h-full
                        object-contain
                      "
                    />

                  </div>


                  {/* DETAILS */}

                  <div className="flex-1 min-w-0">

                    <p className="
                      text-xs
                      text-rose-500
                      font-semibold
                      uppercase
                      tracking-wider
                    ">
                      Product
                    </p>

                    <h2 className="
                      font-bold
                      text-gray-900
                      mt-1
                      line-clamp-2
                    ">
                      {item.title}
                    </h2>

                    <p className="
                      text-rose-500
                      font-bold
                      text-lg
                      mt-2
                    ">
                      ${item.price.toFixed(2)}
                    </p>

                  </div>


                  {/* QUANTITY */}

                  <div className="flex items-center gap-3">

                    <button
                      onClick={() =>
                        decreaseQty(item.id)
                      }
                      className="
                        w-9
                        h-9
                        rounded-xl
                        border
                        border-gray-200
                        bg-gray-50
                        flex
                        items-center
                        justify-center
                        text-gray-600
                        hover:bg-rose-50
                        hover:text-rose-500
                        hover:border-rose-200
                        transition
                      "
                    >
                      <Minus size={16} />
                    </button>

                    <span className="
                      min-w-[28px]
                      text-center
                      font-bold
                      text-gray-900
                    ">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQty(item.id)
                      }
                      className="
                        w-9
                        h-9
                        rounded-xl
                        bg-rose-500
                        text-white
                        flex
                        items-center
                        justify-center
                        hover:bg-rose-600
                        transition
                      "
                    >
                      <Plus size={16} />
                    </button>

                  </div>


                  {/* REMOVE */}

                  <button
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                    className="
                      w-10
                      h-10
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      text-gray-400
                      hover:bg-red-50
                      hover:text-red-500
                      transition
                    "
                    title="Remove item"
                  >
                    <Trash2 size={19} />
                  </button>

                </div>

              </div>

            ))}

          </div>


          <aside className="
            h-fit
            bg-white
            border
            border-rose-100
            rounded-3xl
            p-6
            shadow-sm
            lg:sticky
            lg:top-28
          ">

            <div className="flex items-center gap-3">

              <div className="
                w-11
                h-11
                rounded-xl
                bg-rose-50
                flex
                items-center
                justify-center
              ">
                <Package
                  size={20}
                  className="text-rose-500"
                />
              </div>

              <div>

                <h2 className="font-bold text-gray-900">
                  Order Summary
                </h2>

                <p className="text-xs text-gray-500">
                  Your shopping details
                </p>

              </div>

            </div>


            <div className="border-t border-gray-100 my-6" />


            <div className="space-y-4">

              <div className="flex justify-between text-sm">

                <span className="text-gray-500">
                  Items
                </span>

                <span className="font-semibold text-gray-900">
                  {cart.length}
                </span>

              </div>


              <div className="flex justify-between text-sm">

                <span className="text-gray-500">
                  Subtotal
                </span>

                <span className="font-semibold text-gray-900">
                  ${total.toFixed(2)}
                </span>

              </div>


              <div className="flex justify-between text-sm">

                <span className="text-gray-500">
                  Delivery
                </span>

                <span className="font-semibold text-green-600">
                  FREE
                </span>

              </div>

            </div>


            <div className="border-t border-gray-100 my-6" />


            <div className="flex justify-between items-center">

              <span className="font-bold text-gray-900">
                Total
              </span>

              <span className="text-2xl font-extrabold text-rose-500">
                ${total.toFixed(2)}
              </span>

            </div>


            <Link
              to="/checkout"
              className="
                w-full
                mt-6
                flex
                items-center
                justify-center
                gap-2
                bg-rose-500
                hover:bg-rose-600
                text-white
                py-3.5
                rounded-xl
                font-semibold
                shadow-lg
                shadow-rose-100
                transition
              "
            >
              Proceed to Checkout
              <ArrowRight size={18} />
            </Link>


            <Link
              to="/products"
              className="
                w-full
                mt-3
                flex
                items-center
                justify-center
                py-3
                rounded-xl
                border
                border-rose-200
                text-rose-500
                font-semibold
                hover:bg-rose-50
                transition
              "
            >
              Continue Shopping
            </Link>

          </aside>

        </div>

      </section>

    </main>
  );
}

