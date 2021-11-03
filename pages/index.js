import React from "react";

import { useRouter } from "next/router";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="w-full max-w-sm">
              <div className="flex flex-col break-words bg-white border rounded shadow-md">
                <div className="font-semibold bg-gray-200 text-gray-700 py-3 px-6 mb-0">
                  Sign in
                </div>
                <form className="w-full p-6">
                  <div className="flex flex-wrap mb-6">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="username"
                    >
                      Username
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Username"
                    />
                  </div>
                  <div className="flex flex-wrap mb-6">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="******************"
                    />
                  </div>
                  <div className="flex mb-2">
                    <input className="mr-1" type="checkbox" id="remember_me" />
                    <label
                      className="text-sm text-gray-700 font-bold"
                      htmlFor="remember_me"
                    >
                      Remember me
                    </label>
                  </div>
                  <div className="flex flex-wrap items-center">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={() => {
                        console.log("Signing in...");
                      }}
                    >
                      Sign In
                    </button>
                    <div className="row flex-1 text-sm text-gray-500 hover:text-gray-600 ml-2">
                      <a
                        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                        href="#"
                        onClick={() => {
                          console.log("Forgot password");
                        }}
                      >
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                </form>
              </div>
              <div>
                <a
                  onClick={() => {
                    useRouter().push("/register");
                  }}
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="/register"
                >
                  Not a Member?
                </a>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
