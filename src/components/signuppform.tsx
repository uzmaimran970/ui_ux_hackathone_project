import { LockClosedIcon, EnvelopeIcon, UserIcon } from "@heroicons/react/24/outline";

export default function SignUp() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Sign Up</h2>
        <form className="space-y-4">
          {/* Name Input */}
          <div className="relative">
            <UserIcon className="absolute w-5 h-5 text-gray-400 left-3 top-3" />
            <input
              type="text"
              placeholder="Name"
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          {/* Email Input */}
          <div className="relative">
            <EnvelopeIcon className="absolute w-5 h-5 text-gray-400 left-3 top-3" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          {/* Password Input */}
          <div className="relative">
            <LockClosedIcon className="absolute w-5 h-5 text-gray-400 left-3 top-3" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          {/* Remember Me */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500" />
              <span className="ml-2 text-sm text-gray-600">Remember me?</span>
            </label>
            <a href="#" className="text-sm text-orange-500 hover:underline">
              Forgot password?
            </a>
          </div>
          {/* Sign-Up Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md font-bold"
          >
            Sign Up
          </button>
        </form>
        {/* Divider */}
        <div className="flex items-center justify-center my-4">
          <div className="w-1/4 border-b"></div>
          <span className="mx-2 text-sm text-gray-500">OR</span>
          <div className="w-1/4 border-b"></div>
        </div>
        {/* Social Sign-Up */}
        <div className="space-y-3">
          <button className="flex items-center justify-center w-full border rounded-md py-2 hover:bg-gray-100">
            <img src="/google.svg" alt="Google" className="w-5 h-5 mr-2" />
            <span className="text-sm">Sign up with Google</span>
          </button>
          <button className="flex items-center justify-center w-full border rounded-md py-2 hover:bg-gray-100">
            <img src="/apple.svg" alt="Apple" className="w-5 h-5 mr-2" />
            <span className="text-sm">Sign up with Apple</span>
          </button>
        </div>
      </div>
    </div>
  );
}
