export default function Newsletter() {
  return (
    <div className="flex flex-col justify-center items-center bg-white py-10 px-4 sm:px-0">
      <h2 className="font-extrabold text-4xl sm:text-6xl mb-6 text-center">
        Subscribe to our newsletter
      </h2>
      <p className="text-lg sm:text-xl text-gray-600 mb-6 text-center">
        Get the latest updates and offers.
      </p>
      <form className="w-full max-w-md">
        <div className="flex items-center border-b border-red-700 py-2">
          <input
            type="email"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            placeholder="Enter your email"
            aria-label="Email"
          />
          <button
            type="submit"
            className="flex-shrink-0 bg-red-700 hover:bg-red-600 border-red-700 hover:border-red-600 text-sm border-4 text-white py-1 px-2 rounded"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}
