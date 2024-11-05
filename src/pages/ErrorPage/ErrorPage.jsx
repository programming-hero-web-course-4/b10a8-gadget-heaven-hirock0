import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main className="bg-gray-900">
      <div className=" flex flex-col items-center justify-center min-h-screen  text-white">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-6 max-sm:text-base">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600 transition"
        >
          Go Back Home
        </Link>
      </div>
    </main>
  );
};

export default ErrorPage;
