import { useState } from "react";
import {
  Plus,
  Pencil,
  Trash2,
} from "lucide-react";

export default function Admin() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99,
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 149,
    },
  ]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [editId, setEditId] = useState(null);

  const saveProduct = (e) => {
    e.preventDefault();

    if (!name || !price) return;

    if (editId) {
      setProducts((prev) =>
        prev.map((item) =>
          item.id === editId
            ? {
                ...item,
                name,
                price,
              }
            : item
        )
      );

      setEditId(null);
    } else {
      setProducts((prev) => [
        ...prev,
        {
          id: Date.now(),
          name,
          price,
        },
      ]);
    }

    setName("");
    setPrice("");
  };

  const editProduct = (product) => {
    setEditId(product.id);
    setName(product.name);
    setPrice(product.price);
  };

  const deleteProduct = (id) => {
    setProducts((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  return (
    <main className="max-w-6xl mx-auto px-5 py-10">

      <div className="mb-8">
        <p className="text-indigo-600 font-semibold">
          ADMIN PANEL
        </p>

        <h1 className="text-4xl font-bold dark:text-white">
          Product Management
        </h1>
      </div>

      <form
        onSubmit={saveProduct}
        className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow flex flex-col md:flex-row gap-4"
      >

        <input
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          placeholder="Product name"
          className="flex-1 p-3 border rounded-xl"
        />

        <input
          value={price}
          onChange={(e) =>
            setPrice(e.target.value)
          }
          type="number"
          placeholder="Price"
          className="w-full md:w-40 p-3 border rounded-xl"
        />

        <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2">
          <Plus size={18} />
          {editId ? "Update" : "Add"}
        </button>

      </form>

      <div className="mt-8 bg-white dark:bg-gray-900 rounded-2xl shadow overflow-hidden">

        {products.map((product) => (
          <div
            key={product.id}
            className="p-5 border-b dark:border-gray-800 flex items-center justify-between"
          >

            <div>
              <h2 className="font-semibold dark:text-white">
                {product.name}
              </h2>

              <p className="text-indigo-600 font-bold">
                ${product.price}
              </p>
            </div>

            <div className="flex gap-2">

              <button
                onClick={() =>
                  editProduct(product)
                }
                className="p-3 bg-blue-50 text-blue-600 rounded-xl"
              >
                <Pencil size={17} />
              </button>

              <button
                onClick={() =>
                  deleteProduct(product.id)
                }
                className="p-3 bg-red-50 text-red-600 rounded-xl"
              >
                <Trash2 size={17} />
              </button>

            </div>

          </div>
        ))}

      </div>
    </main>
  );
}