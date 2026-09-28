import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center text-center px-5">

      <div>
        <h1 className="text-8xl font-bold text-indigo-600">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-4 dark:text-white">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-3">
          The page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="inline-block mt-7 bg-indigo-600 text-white px-6 py-3 rounded-xl"
        >
          Back to Home
        </Link>
      </div>

    </main>
  );
}