import React from "react";
import { AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ErrorScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <div className="bg-red-100 text-red-500 p-4 rounded-full">
            <AlertTriangle className="w-8 h-8" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Ooppss!! Something Went Wrong</h2>
        <p className="text-gray-600 text-sm">
          We're sorry, but we couldn't load the content you're looking for. Please try again later.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full transition"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
}

export default ErrorScreen;
