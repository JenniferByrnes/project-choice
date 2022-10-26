import React from "react";
import mainLogo from "../../assets/mainLogo/main-logo.png";
import "./homepage.css";

function Homepage() {
  return (
    <section className="homepage">
      <div className="homepage-logo">
        <img className="homepageLogo" src={mainLogo} alt="cover" />
      </div>
      <div>
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>

        {/* <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Find a Clinic Near You
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Use this short form to find the closest abortion clinics near you.
                </p>
              </div>
            </div> */}
            <div className="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div className="overflow-hidden shadow sm:rounded-md">
                  <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="age"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Age
                        </label>
                        <input
                          type="text"
                          name="age"
                          id="age"
                          autoComplete="age"
                          className="mt-1 block w-full rounded-md border-gray-500 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Time Since Last Period
                        </label>
                        <select
                          id="period"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                        >
                          <option></option>
                          <option>Less than 6 weeks ago</option>
                          <option>6 to 11 weeks ago</option>
                          <option>12 to 15 weeks ago</option>
                          <option>16 to 20 weeks ago</option>
                          <option>More than 20 weeks ago</option>
                          <option>Not sure</option>
                        </select>
                      </div>

                      <div className="col-span-6">
                        <label
                          htmlFor="zip-code"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Zip Code
                        </label>
                        <input
                          type="text"
                          name="zip-code"
                          id="zip-code"
                          autoComplete="zip-code"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        {/* </div>
      </div> */}
    </section>
  );
}

export default Homepage;
