import React from "react";
import mainLogo from "../../assets/mainLogo/fullLogo.png";
import "./homepage.css";
// bg-[#dae8e3]
function Homepage() {
  return (
    <section className="homepage w-full p-6 md:h-screen">
      <div className="p-0 ">
        <div className="pb-10 pt-20 flex justify-center w-full h-full homepage-logo">
          <img
            className="homepageLogo"
            src={mainLogo}
            style={{ width: "350px", height: "350px" }}
            alt="cover"
          />
        </div>
        <div>
          <div className="hidden sm:block" aria-hidden="true">
            <div className="p-0">
              <div className="border-8 border-double border-red-200" />
            </div>
          </div>
        </div>
      </div>
        <div className="w-full h-screenflex justify-center items-center p-4">
          <div className="flex flex-col justify-center items-center">
            <form action="#" method="POST">
              <div className="overflow-hidden border-8 border-double sm:rounded-md">
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
                        className="mt-1 block w-full rounded-md border-4 shadow-sm sm:text-sm"
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
                        className="mt-1 block w-full rounded-md border-4 bg-white py-2 px-3 shadow-sm  sm:text-sm"
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
                        className="mt-1 block w-full rounded-md border-4 shadow-sm sm:text-sm"
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
    </section>
  );
}

export default Homepage;
