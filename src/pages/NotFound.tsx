import { Link } from "react-router-dom";
import { useSEO } from "../hooks/usePageTitle";

export default function NotFound() {
  useSEO({
    title: "Page Not Found | Flowfix Plumbing",
    description:
      "The page you're looking for could not be found. Return to Flowfix Plumbing to explore our plumbing services.",
    image: "",
    url: "",
  });
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="text-7xl font-extrabold text-primary sm:text-8xl">404</p>

        <h1 className="mt-4 text-2xl font-bold text-text sm:text-3xl">
          Page Not Found
        </h1>

        <p className="mt-3 text-sm leading-6 text-muted sm:text-base">
          The page you're looking for doesn't exist, has been moved, or the URL
          may be incorrect.
        </p>

        <Link
          to="/"
          className="mt-7 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
