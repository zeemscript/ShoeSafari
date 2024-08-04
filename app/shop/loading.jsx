import React from "react";
// import LoadingSpinner from "../../components/LoadingSpinner";
const loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        <div className="loader border-t-4 border-red-700 rounded-full w-16 h-16 mx-auto animate-spin"></div>
      </div>
    </div>
  );
};

export default loading;
