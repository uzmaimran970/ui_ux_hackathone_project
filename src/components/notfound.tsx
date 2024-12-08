
export default function NotFound() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
        <div className="text-center bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <h1 className="text-6xl font-bold text-orange-500">404</h1>
          <p className="mt-4 text-xl font-semibold text-gray-700">
            Oops! Looks like something going wrong.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Page cannot be found! Well have it figured out in no time. Meanwhile, check out these fresh ideas:
          </p>
          <button
        
            className="inline-block mt-6 px-6 py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-md font-medium"
          >
            Go to home
          </button>
        </div>
      </div>
    );
  }
  