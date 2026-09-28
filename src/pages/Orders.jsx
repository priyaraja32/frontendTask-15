import {
  Package,
  CheckCircle,
  Clock,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

export default function Orders() {
  const orders = [
    {
      id: "#SN1001",
      date: "28 Sep 2026",
      amount: "$129.99",
      status: "Delivered",
    },
    {
      id: "#SN1002",
      date: "25 Sep 2026",
      amount: "$79.50",
      status: "Processing",
    },
    {
      id: "#SN1003",
      date: "20 Sep 2026",
      amount: "$249.00",
      status: "Delivered",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fffafa]">

      {/* ================= HEADER ================= */}

      <section className="bg-gradient-to-br from-rose-50 via-white to-pink-50">

        <div className="max-w-6xl mx-auto px-5 py-12">

          <div className="flex items-center gap-4">

            <div className="
              w-14
              h-14
              rounded-2xl
              bg-rose-500
              flex
              items-center
              justify-center
              shadow-lg
              shadow-rose-200
            ">
              <ShoppingBag
                size={27}
                className="text-white"
              />
            </div>

            <div>

              <p className="text-rose-500 text-sm font-bold uppercase tracking-wider">
                ORDER HISTORY
              </p>

              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-1">
                My Orders
              </h1>

            </div>

          </div>

          <p className="text-gray-500 mt-5 max-w-2xl">
            Track your recent purchases and check the status of
            your orders.
          </p>

        </div>

      </section>


      {/* ================= ORDERS ================= */}

      <section className="max-w-6xl mx-auto px-5 py-10">

        <div className="flex items-center justify-between mb-6">

          <div>

            <h2 className="text-xl font-bold text-gray-900">
              Recent Orders
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              {orders.length} orders found
            </p>

          </div>

        </div>


        <div className="space-y-5">

          {orders.map((order) => (

            <div
              key={order.id}
              className="
                group
                bg-white
                border
                border-rose-100
                rounded-3xl
                p-6
                shadow-sm
                hover:shadow-lg
                hover:-translate-y-0.5
                transition-all
                duration-300
              "
            >

              <div className="
                flex
                flex-col
                lg:flex-row
                lg:items-center
                lg:justify-between
                gap-6
              ">

                {/* ================= ORDER INFO ================= */}

                <div className="flex items-center gap-4">

                  <div className="
                    w-14
                    h-14
                    shrink-0
                    rounded-2xl
                    bg-rose-50
                    flex
                    items-center
                    justify-center
                    group-hover:bg-rose-500
                    transition-all
                  ">

                    <Package
                      size={25}
                      className="
                        text-rose-500
                        group-hover:text-white
                        transition
                      "
                    />

                  </div>


                  <div>

                    <p className="text-xs text-gray-400 uppercase tracking-wider">
                      Order ID
                    </p>

                    <h2 className="text-lg font-bold text-gray-900 mt-1">
                      {order.id}
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                      Placed on {order.date}
                    </p>

                  </div>

                </div>


                {/* ================= AMOUNT ================= */}

                <div className="lg:text-center">

                  <p className="text-xs text-gray-400 uppercase tracking-wider">
                    Total Amount
                  </p>

                  <p className="text-xl font-extrabold text-gray-900 mt-1">
                    {order.amount}
                  </p>

                </div>


                {/* ================= STATUS ================= */}

                <div>

                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">
                    Order Status
                  </p>

                  {order.status === "Delivered" ? (

                    <div className="
                      inline-flex
                      items-center
                      gap-2
                      px-4
                      py-2
                      rounded-full
                      bg-green-50
                      border
                      border-green-100
                      text-green-600
                      text-sm
                      font-semibold
                    ">

                      <CheckCircle size={17} />

                      Delivered

                    </div>

                  ) : (

                    <div className="
                      inline-flex
                      items-center
                      gap-2
                      px-4
                      py-2
                      rounded-full
                      bg-amber-50
                      border
                      border-amber-100
                      text-amber-600
                      text-sm
                      font-semibold
                    ">

                      <Clock size={17} />

                      Processing

                    </div>

                  )}

                </div>


                {/* ================= ACTION ================= */}

                <button
                  className="
                    w-10
                    h-10
                    rounded-xl
                    bg-gray-50
                    border
                    border-gray-100
                    flex
                    items-center
                    justify-center
                    text-gray-400
                    hover:bg-rose-50
                    hover:text-rose-500
                    hover:border-rose-100
                    transition
                  "
                  title="View Order"
                >

                  <ArrowRight size={18} />

                </button>

              </div>

            </div>

          ))}

        </div>


        {/* ================= BOTTOM MESSAGE ================= */}

        <div className="
          mt-10
          rounded-3xl
          bg-white
          border
          border-rose-100
          p-7
          text-center
        ">

          <div className="
            w-12
            h-12
            mx-auto
            rounded-2xl
            bg-rose-50
            flex
            items-center
            justify-center
          ">

            <Package
              size={22}
              className="text-rose-500"
            />

          </div>

          <h3 className="font-bold text-gray-900 mt-4">
            Need help with an order?
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            Contact our support team if you have any questions
            about your orders.
          </p>

        </div>

      </section>

    </main>
  );
}
