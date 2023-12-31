import { Link } from "react-router-dom";

export default function Header({
  heading,
  paragraph,
  linkName,
  linkUrl = "#",
}) {
  return (
    <div className="my-10">
      <div className="flex justify-center">
        <img
          alt=""
          className="h-36 w-72"
          src="https://fce.uit.edu.vn/wp-content/uploads/2022/07/FCE-Site-logo.png"
        />
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {heading}
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600 mt-5">
        {paragraph}{" "}
        <Link
          to={linkUrl}
          className="font-medium text-green-600 hover:text-green-500"
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
}
