"use client";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        <div className="loader border-t-4 border-red-700 rounded-full w-16 h-16 mx-auto animate-spin"></div>
        <p className="text-red-700 font-semibold text-xl mt-4">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
