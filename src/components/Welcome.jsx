import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="text-center">
        <h2 className="text-lg font-semibold mb-2 text-gray-900">Welcome to PopX</h2>
        <p className="text-gray-500 text-xs mb-6 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="space-y-2">
          <Link to="/register" className="block">
            <button className="w-full bg-purple-600 text-white py-2.5 rounded-md text-sm font-medium">
              Create Account
            </button>
          </Link>
          <Link to="/login" className="block">
            <button className="w-full border border-gray-300 text-gray-700 py-2.5 rounded-md text-sm font-medium bg-gray-50">
              Already Registered? Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
